import { IBlog } from "../../ui/interfaces/blog";
import { IPagination } from "./pagination";

export interface IBlogResponse {
    data: IBlog[];
    meta: IPagination;
}