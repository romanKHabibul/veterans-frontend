"use client"

import React from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import validator from 'validator'
import { useRouter } from 'next/navigation'
import { useActions } from '@/src/hooks/useActions'

import cl from "./AuthForm.module.scss"
import {mont} from "./../../../../app/layout"

const AuthForm = () => {

    const pathname = usePathname()
    const {push} = useRouter()
    const {register: registerTHUNK, login: loginTHUNK} = useActions()

    function redirect(){
        pathname == "/login" 
        ? push("/register")
        : push("/login")
    }

    const {register, handleSubmit, formState: {errors}} = useForm<{
        email: string;
        password: string;
        name: string;
        role?: string;
    }>()

    const submit: SubmitHandler<{
        email: string;
        password: string;
        name: string;
        role?: string;
    }> = data => {
        pathname == "/login"
        ? loginTHUNK(data)
        : registerTHUNK(data)
    }

    return (
        <>
        <form 
            className={cl.form} 
            onSubmit={handleSubmit(submit)}
        >
            <h2 className={cl.title}>
                {pathname =="/login" ? "Авторизация" : "Регистрация"}
            </h2>


            <h3 className={cl.subtitle}>
                Введите эл. почту:
            </h3>
            <input 
                className={cl.authInput} 
                {...register("email", {required: true, validate: input => validator.isEmail(input)})}
                type="text" 
                placeholder="Почта..."
                style={mont.style}/>
            {errors?.email &&
            <div style={{textTransform: "uppercase", color: "red", margin: "0 0 10px", textAlign: "left"}} className={cl.error}>
                Неверный адресс электронной почты
            </div>
            }


            <h3 className={cl.subtitle}>
                Введите пароль:
            </h3>
            <input 
                className={cl.authInput} 
                {...register("password", {required: true, minLength: 6, maxLength: 30})}
                type="text" 
                placeholder="Пароль..."
                style={mont.style}/>
            {errors?.password &&
                <div style={{textTransform: "uppercase", color: "red", margin: '0 0 10px', textAlign: "left"}} className={cl.error}>
                    Длина пароля от 6 до 30 символов
                </div>
            }  


            {pathname == "/register"  &&
            <>
            <h3 className={cl.subtitle}>
                Введите имя:
            </h3> 
            <input 
                className={cl.authInput} 
                {...register("name", {required: true, minLength: 3, maxLength: 30})}
                type="text" 
                placeholder="Имя..."
                style={mont.style}/>
                {errors?.name &&
                    <div style={{textTransform: "uppercase", color: "red", margin: '0 0 10px', textAlign: "left"}} className={cl.error}>
                        Длина имени от 3 до 30 символов
                    </div>
                }
            </>
            }


            <button 
                onClick={redirect} 
                type='button'
                className={cl.redirect}
                style={mont.style}
            >
                {pathname == "/login" ? "Нет аккаунта? Нажмите сюда, чтобы создать" : "Есть аккаунт? Войдите"}
            </button>


            <div className={cl.buttons}>
                <Link href="/">
                <button 
                    type="button"
                    className={cl.back}
                    style={mont.style}
                >
                    Вернуться
                </button>
                </Link>
                <button 
                    className={cl.submit} 
                    type="submit"
                    style={mont.style}
                >
                    {pathname == "/login" ? "Войти" : "Создать"}
                </button>
            </div>
        </form>
        </>
    )
}

export default AuthForm
