import { useAuth } from "@/src/hooks/useAuth"
import { API_URL } from "@/src/api/axios"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { StoreState } from "../store"
import { IUser } from "@/src/@types/user.types"
import { IVeteran } from "@/src/@types/veterans.types"
import { IFeedback } from "@/src/@types/feedback.types"

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["Profile", "Veterans", "VeteransWPagi", "Feedback","User"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as StoreState).auth.accessToken

            if(token) headers.set("Authorization", `Bearer ${token}`)

            return headers
        }
    }),
    endpoints: builder => ({
        getProfile: builder.query<IUser, any>({
            query: () => "/users/profile",
            providesTags: () => [{type: "Profile"}],
            keepUnusedDataFor: 0
        }),
        getById: builder.query<IUser, number>({
            query: (id) => `/users/${id}` 
        }),  
        updateUser: builder.mutation<IUser, {name: string, email: string}>({
            query: (request) => ({
                url: "/users",
                method: "PUT",
                body: request
            }),
            invalidatesTags: () => [{type: "Profile"}]
        }),  
        changeAvatar: builder.mutation<null, {media: any}>({
            query: ({media}) => ({
                url: "/users/upload",
                method: "POST",
                body: media
            }),
            invalidatesTags: () => [{type: "Profile"}]
        }),
        getUsers: builder.query<IUser[], null>({
            query: () => "/users",
            providesTags: () => [{type: "User"}]
        }),  
        getVeterans: builder.query<IVeteran[], null>({
            query: () => ({url: "/veterans"}),
            providesTags: () => [{type: "Veterans"}]
        }),
        getVeteransWithPagi: builder.query<IVeteran[], {page: number, limit: number}>({
            query: ({page, limit}) => `/veterans/pagination?page=${page}&limit=${limit}`,
            providesTags: () => [{type: "VeteransWPagi"}]
        }),
        removeVeteran: builder.mutation<null, number>({
            query: (id) => ({
                url: `veterans/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: () => [{type: "Veterans"}, {type: "VeteransWPagi"}]
        }),
        addVeteran: builder.mutation<null, IVeteran>({
            query: (request) => ({
                url: `/veterans`,
                method: "POST",
                body: request
            }),
            invalidatesTags: () => [{type: "Veterans"}, {type: "VeteransWPagi"}]
        }),
        addImage: builder.mutation<null,{id: number, media: any}>({
            query: ({id, media}) => ({
                url: `/veterans/upload/${id}`,
                method: "POST",
                body: media
            }),
            invalidatesTags: () => [{type: "Veterans"}]
        }),
        getFeedBack: builder.query<IFeedback[], null>({
            query: () => "/feedback",
            providesTags: () => [{type: "Feedback"}]
        }),
        removeFeedback: builder.mutation<null, number>({
            query: (id) => ({
                url: `/feedback/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: () => [{type: "Feedback"}]
        }),
        addFeedback: builder.mutation<null, {title: string, description: string}>({
            query: (request) => ({
                url: "/feedback",
                method: "POST",
                body: request
            }),
            invalidatesTags: () => [{type: "Feedback"}]
        })
    })
})