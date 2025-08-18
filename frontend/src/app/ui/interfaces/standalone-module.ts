import { IBookDemo } from "./book-demo";
import { IKeyFeature } from "./key-feature";
import { IModuleFeature } from "./module-feature";


export interface IStandaloneModule {
    id: string;
    heroBanner: {
        title: string;
    };
    moduleFeatures: IModuleFeature[];
    keyFeatures: IKeyFeature[];
    bookDemo: IBookDemo;
}