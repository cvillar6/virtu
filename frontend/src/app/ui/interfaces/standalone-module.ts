import { IBookDemo } from "./book-demo";
import { IHeroBanner } from "./hero-banner";
import { IKeyFeature } from "./key-feature";
import { IModuleFeature } from "./module-feature";


export interface IStandaloneModule {
    id: string;
    heroBanner: IHeroBanner;
    moduleFeatures: IModuleFeature[];
    keyFeatures: IKeyFeature[];
    bookDemo: IBookDemo;
}