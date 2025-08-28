export interface IIndustry {
    title: string;
    description: string;
    image: string;
}

export interface ISimpleIndustry {
    title: string;
    description: string;
}

export interface IIndustrySection {
    information: ISimpleIndustry;
    solutions: IIndustry[];
}