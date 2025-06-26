import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_about_heroes';
  info: {
    description: '';
    displayName: 'about-hero';
  };
  attributes: {
    aboutHeroImg: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    companyInfo: Schema.Attribute.Component<'elements.key-value', true>;
    heading: Schema.Attribute.String;
  };
}

export interface AboutAboutInsight extends Struct.ComponentSchema {
  collectionName: 'components_about_about_insights';
  info: {
    displayName: 'About Insight';
  };
  attributes: {
    heading: Schema.Attribute.String;
    insight_desc: Schema.Attribute.Blocks;
    stats: Schema.Attribute.Component<'elements.stat-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutAboutTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_about_teams';
  info: {
    displayName: 'About Team';
  };
  attributes: {
    heading: Schema.Attribute.String;
    team: Schema.Attribute.Component<'about.team-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutAboutValues extends Struct.ComponentSchema {
  collectionName: 'components_about_about_values';
  info: {
    description: '';
    displayName: 'About Values';
  };
  attributes: {
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
    valueItems: Schema.Attribute.Component<'elements.key-value', true>;
  };
}

export interface AboutTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_about_team_cards';
  info: {
    displayName: 'Team Card';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    social_links: Schema.Attribute.Component<'header.icons', true>;
  };
}

export interface CareerCareerBenefits extends Struct.ComponentSchema {
  collectionName: 'components_career_career_benefits';
  info: {
    description: '';
    displayName: 'Career Benefits';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'elements.key-value', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CareerCareerHero extends Struct.ComponentSchema {
  collectionName: 'components_career_career_heroes';
  info: {
    displayName: 'Career Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.elements', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    hero_img: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface CareerCareerStats extends Struct.ComponentSchema {
  collectionName: 'components_career_career_stats';
  info: {
    displayName: 'Career Stats';
  };
  attributes: {
    stats: Schema.Attribute.Component<'elements.stat-card', true>;
  };
}

export interface ElementsElements extends Struct.ComponentSchema {
  collectionName: 'components_elements_elements';
  info: {
    description: '';
    displayName: 'CTA Button';
  };
  attributes: {
    cta_btn_text: Schema.Attribute.String;
    cta_btn_url: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    feature_image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ElementsKeyValue extends Struct.ComponentSchema {
  collectionName: 'components_elements_key_values';
  info: {
    description: '';
    displayName: 'key-value';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface ElementsSingleTextRepeater extends Struct.ComponentSchema {
  collectionName: 'components_elements_single_text_repeaters';
  info: {
    description: '';
    displayName: 'Single Text Repeater';
  };
  attributes: {
    value: Schema.Attribute.Text;
  };
}

export interface ElementsStatCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_stat_cards';
  info: {
    displayName: 'Stat Card';
  };
  attributes: {
    stat_bg_img: Schema.Attribute.Media<'images' | 'files'>;
    stat_desc: Schema.Attribute.String;
    stat_number: Schema.Attribute.String;
  };
}

export interface ElementsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonial_cards';
  info: {
    displayName: 'Testimonial Card';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    location_designation: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    address_content: Schema.Attribute.String;
    address_text: Schema.Attribute.String;
    explore_adino_pages: Schema.Attribute.Component<'header.pages', true>;
    explore_adino_text: Schema.Attribute.String;
    governance_pages: Schema.Attribute.Component<'header.pages', true>;
    governance_text: Schema.Attribute.String;
    more_info_pages: Schema.Attribute.Component<'header.pages', true>;
    more_info_text: Schema.Attribute.String;
    social: Schema.Attribute.String;
    social_links: Schema.Attribute.Component<'header.icons', true>;
  };
}

export interface HeaderIcons extends Struct.ComponentSchema {
  collectionName: 'components_header_icons';
  info: {
    displayName: 'Icons';
  };
  attributes: {
    icon_image: Schema.Attribute.Media<'images' | 'files'>;
    icon_url: Schema.Attribute.String;
  };
}

export interface HeaderLogo extends Struct.ComponentSchema {
  collectionName: 'components_header_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface HeaderPages extends Struct.ComponentSchema {
  collectionName: 'components_header_pages';
  info: {
    displayName: 'Pages';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface HomePageHeroSpecializeSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_hero_specialize_sections';
  info: {
    description: '';
    displayName: 'Home Specialize Section';
  };
  attributes: {
    specializeHeading: Schema.Attribute.String;
    specializeItems: Schema.Attribute.Component<'elements.feature-item', true>;
  };
}

export interface HomePageHomeAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_about_sections';
  info: {
    description: '';
    displayName: 'Home About Section';
  };
  attributes: {
    about_cta: Schema.Attribute.Component<'elements.elements', false>;
    about_description: Schema.Attribute.Blocks;
    about_heading: Schema.Attribute.String;
    about_stat_cards: Schema.Attribute.Component<'elements.stat-card', true>;
  };
}

export interface HomePageHomeCareerSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_career_sections';
  info: {
    displayName: 'Home Career Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.elements', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface HomePageHomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_hero_sections';
  info: {
    description: '';
    displayName: 'Home Hero Section';
  };
  attributes: {
    heading_text: Schema.Attribute.String;
    hero_bg: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    hero_bottom_text: Schema.Attribute.Blocks;
    hero_cta: Schema.Attribute.Component<'elements.elements', false>;
    hero_features: Schema.Attribute.Component<'elements.feature-item', true>;
  };
}

export interface HomePageHomeNewsAndUpdates extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_news_and_updates';
  info: {
    description: '';
    displayName: 'Home News & Updates';
  };
  attributes: {
    bigHeading: Schema.Attribute.String;
    newsCta: Schema.Attribute.Component<'elements.elements', false>;
    shortHeading: Schema.Attribute.String;
  };
}

export interface SubsidiariesGlobalMarketAbout extends Struct.ComponentSchema {
  collectionName: 'components_subsidiaries_global_market_abouts';
  info: {
    displayName: 'Global market about';
  };
  attributes: {
    description_1: Schema.Attribute.Blocks;
    description_2: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Text;
    image_1: Schema.Attribute.Media<'images'>;
    image_2: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SubsidiariesGlobalMarketHero extends Struct.ComponentSchema {
  collectionName: 'components_subsidiaries_global_market_heroes';
  info: {
    displayName: 'global market hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.elements', false>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    hero_bg: Schema.Attribute.Media<'images'>;
    stats: Schema.Attribute.Component<'elements.stat-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SubsidiariesGlobalMarketService
  extends Struct.ComponentSchema {
  collectionName: 'components_subsidiaries_global_market_services';
  info: {
    displayName: 'Global market service';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'elements.key-value', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-hero': AboutAboutHero;
      'about.about-insight': AboutAboutInsight;
      'about.about-team': AboutAboutTeam;
      'about.about-values': AboutAboutValues;
      'about.team-card': AboutTeamCard;
      'career.career-benefits': CareerCareerBenefits;
      'career.career-hero': CareerCareerHero;
      'career.career-stats': CareerCareerStats;
      'elements.elements': ElementsElements;
      'elements.feature-item': ElementsFeatureItem;
      'elements.key-value': ElementsKeyValue;
      'elements.single-text-repeater': ElementsSingleTextRepeater;
      'elements.stat-card': ElementsStatCard;
      'elements.testimonial-card': ElementsTestimonialCard;
      'footer.footer': FooterFooter;
      'header.icons': HeaderIcons;
      'header.logo': HeaderLogo;
      'header.pages': HeaderPages;
      'home-page.hero-specialize-section': HomePageHeroSpecializeSection;
      'home-page.home-about-section': HomePageHomeAboutSection;
      'home-page.home-career-section': HomePageHomeCareerSection;
      'home-page.home-hero-section': HomePageHomeHeroSection;
      'home-page.home-news-and-updates': HomePageHomeNewsAndUpdates;
      'subsidiaries.global-market-about': SubsidiariesGlobalMarketAbout;
      'subsidiaries.global-market-hero': SubsidiariesGlobalMarketHero;
      'subsidiaries.global-market-service': SubsidiariesGlobalMarketService;
    }
  }
}
