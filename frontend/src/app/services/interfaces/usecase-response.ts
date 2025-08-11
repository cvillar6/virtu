import { IUsecase } from "../../ui/interfaces/usecase";
import { IPagination } from "./pagination";

export interface IUseCaseResponse {
    data: IUsecase[];
    meta: IPagination;
}   