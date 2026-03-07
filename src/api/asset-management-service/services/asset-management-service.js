'use strict';

/**
 * asset-management-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::asset-management-service.asset-management-service');
