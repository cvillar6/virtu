import { IUsecase } from "../../ui/interfaces/usecase";
import { IPagination } from "./pagination";

export interface IUsecaseResponse {
    data: IUsecase[];
    meta: IPagination;
}   