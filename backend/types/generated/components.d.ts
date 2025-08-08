import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicData extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_data';
  info: {
    displayName: 'Data';
    icon: 'slideshow';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Quantity: Schema.Attribute.String;
  };
}

export interface DynamicInfo extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_infos';
  info: {
    displayName: 'Info';
    icon: 'picture';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic.data': DynamicData;
      'dynamic.info': DynamicInfo;
    }
  }
}
