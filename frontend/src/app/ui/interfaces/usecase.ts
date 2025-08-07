import { IUsecaseData } from "./usecase-data";
import { IUsecaseInfo } from "./usecase-info";

export interface IUsecase {
    documentID: string;
    title: string;
    description: string;
    image: string;
    content: any;
    extendedDescription: string;
    data: IUsecaseData[];
    info: IUsecaseInfo;
}