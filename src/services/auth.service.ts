import { ILogin, IRegister, IRequested } from "../@types/user.types";
import { axiosConfig } from "../api/axios";

export const AuthService = {

    async register(request: IRegister){
        const {data} = await axiosConfig.post<IRequested>("/auth/register", request)
        return data
    },

    async login(request: ILogin){
        const {data} = await axiosConfig.post<IRequested>("/auth/login", request)
        return data
    }
    
}