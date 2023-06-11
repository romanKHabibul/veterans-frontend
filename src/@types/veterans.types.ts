import { IBase } from "./extends.types";

export interface IVeteran extends IBase {
    surname: string;
    name: string;
    patronomyc: string;
    dates: string;
    grades: string;
    description: string;
    imagePath: string;
}