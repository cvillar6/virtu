import { INew } from "../../ui/interfaces/new";
import { IPagination } from "./pagination";

export interface INewResponse {
    data: INew[];
    meta: IPagination;
}