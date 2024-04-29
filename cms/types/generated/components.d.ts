import type { Schema, Attribute } from '@strapi/strapi';

export interface UtilsHeroComponent extends Schema.Component {
  collectionName: 'components_utils_hero_components';
  info: {
    displayName: 'HeroComponent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    title_bold: Attribute.Boolean;
  };
}

export interface UtilsMetaInformation extends Schema.Component {
  collectionName: 'components_utils_meta_informations';
  info: {
    displayName: 'MetaInformation';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface UtilsPlaceHolder extends Schema.Component {
  collectionName: 'components_utils_place_holders';
  info: {
    displayName: 'PlaceHolder';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    color: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'utils.hero-component': UtilsHeroComponent;
      'utils.meta-information': UtilsMetaInformation;
      'utils.place-holder': UtilsPlaceHolder;
    }
  }
}
