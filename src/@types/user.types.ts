import { IBase } from "./extends.types";
import { IFeedback } from "./feedback.types";

export type IRole = "USER" | "ADMIN"

export interface IUser extends IBase {
    email: string;
    name: string;
    role: IRole;
    avatatPath: string;
    feedback: IFeedback[];
}

export interface IRegister {
    email: string;
    password: string;
    name: string;
    role?: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IRequestedUser {
    id: number;
    email: string;
}

export interface IRequested {
    user: IRequestedUser;
    accessToken: string;
}