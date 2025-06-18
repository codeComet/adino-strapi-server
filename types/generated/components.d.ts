import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.elements': ElementsElements;
      'elements.feature-item': ElementsFeatureItem;
      'elements.stat-card': ElementsStatCard;
      'header.icons': HeaderIcons;
      'header.logo': HeaderLogo;
      'header.pages': HeaderPages;
      'home-page.hero-specialize-section': HomePageHeroSpecializeSection;
      'home-page.home-about-section': HomePageHomeAboutSection;
      'home-page.home-career-section': HomePageHomeCareerSection;
      'home-page.home-hero-section': HomePageHomeHeroSection;
      'home-page.home-news-and-updates': HomePageHomeNewsAndUpdates;
    }
  }
}
