import { IRequestedUser } from "@/src/@types/user.types"
import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./auth.actions";
import { api } from "../api/api";


const initialState: {
    user: IRequestedUser | null;
    accessToken: string;
    isLoading: boolean;
} = {
    user: null,
    accessToken: "",
    isLoading: false
}


export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder 
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, {payload}) => {
                state.user = payload.user
                state.accessToken = payload.accessToken
                state.isLoading = false
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false
            })

            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.user = payload.user
                state.accessToken = payload.accessToken
                state.isLoading = false
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false
            })

            .addCase(logout.pending, (state) => {
                state.isLoading = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
                state.accessToken = ""
                state.isLoading = false
            })
    }
})