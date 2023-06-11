import { ILogin, IRegister, IRequested } from "@/src/@types/user.types";
import { AuthService } from "@/src/services/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk<IRequested, IRegister>(
    "auth/register",
    async (request, thunkAPI) => {
        try {
            const response = await AuthService.register(request)
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    } 
)

export const login = createAsyncThunk<IRequested, ILogin>(
    "auth/login",
    async (request, thunkAPI) => {
        try {
            const response = await AuthService.login(request)
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    } 
)

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        return null
    } 
)