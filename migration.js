// @ts-nocheck
const Database = require("better-sqlite3");
const { Client } = require("pg");

const sqlite = new Database(".tmp/data.db");

const pg = new Client({
  host: "localhost",
  port: 5432,
  database: "strapi",
  user: "postgres",
  password: "admin",
});

// Convert SQLite timestamp (ms integer) to a PG-safe ISO string
function convertValue(value) {
  if (typeof value === "number" && value > 1e12) {
    // Looks like a Unix millisecond timestamp
    const date = new Date(value);
    if (!isNaN(date.getTime())) return date.toISOString();
  }
  return value;
}

async function migrate() {
  await pg.connect();

  // Disable FK checks during migration so order doesn't matter
  await pg.query("SET session_replication_role = replica;");

  const tables = sqlite
    .prepare(
      "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'",
    )
    .all();

  for (const { name } of tables) {
    console.log(`Migrating table: ${name}`);
    const rows = sqlite.prepare(`SELECT * FROM "${name}"`).all();

    if (rows.length === 0) {
      console.log(`  (empty, skipping)`);
      continue;
    }

    const columns = Object.keys(rows[0]);
    const colList = columns.map((c) => `"${c}"`).join(", ");

    for (const row of rows) {
      const values = columns.map((c) =>
        convertValue(row[c] === undefined ? null : row[c]),
      );
      const placeholders = values.map((_, i) => `$${i + 1}`).join(", ");

      try {
        await pg.query(
          `INSERT INTO "${name}" (${colList}) VALUES (${placeholders}) ON CONFLICT DO NOTHING`,
          values,
        );
      } catch (err) {
        console.error(`Error inserting into ${name}:`, err.message);
      }
    }

    console.log(`  ✓ ${rows.length} rows inserted into ${name}`);
  }

  // Re-enable FK checks
  await pg.query("SET session_replication_role = DEFAULT;");

  // Reset all sequences
  const sequences = await pg.query(`
    SELECT sequence_name FROM information_schema.sequences
    WHERE sequence_schema = 'public'
  `);

  for (const { sequence_name } of sequences.rows) {
    const tableName = sequence_name.replace(/_id_seq$/, "");
    await pg
      .query(
        `
      SELECT setval('${sequence_name}',
        COALESCE((SELECT MAX(id) FROM "${tableName}"), 1)
      )
    `,
      )
      .catch(() => {});
  }

  console.log("✅ Migration complete!");
  await pg.end();
}

migrate().catch(console.error);
