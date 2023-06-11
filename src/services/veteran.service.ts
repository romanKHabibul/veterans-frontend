import { axiosConfig } from "../api/axios"

export const VeteranService ={

    async upload(media: FormData, id: number, token: string, folder?: string){
        return axiosConfig.post(`/veterans/upload/${id}`, {media:media}, {
            params: {folder},
            headers: {"Authorization": `Bearer ${token}`}
        })
    }
}