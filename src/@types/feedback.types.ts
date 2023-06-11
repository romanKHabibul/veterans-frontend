import { IBase } from "./extends.types";
import { IUser } from "./user.types";

export interface IFeedback extends IBase {
    title: string;
    description: string;
    userId: IUser;
}