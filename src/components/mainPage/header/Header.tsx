"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {FiLogIn} from "react-icons/fi"
import { api } from '@/src/redux/api/api'
import { useAuth } from '@/src/hooks/useAuth'
import { useActions } from '@/src/hooks/useActions'
import Image from 'next/image'

import {mont} from "./../../../../app/layout"
import cl from "./Header.module.scss"

const header = () => {

    const pathname = usePathname()
    const {accessToken} = useAuth()
    const {logout} = useActions()

    const {data: profile, isLoading} = api.useGetProfileQuery(null, {
        skip: !accessToken
    }) 
    
    return (
        <header className={cl.header} style={mont.style}>
        <div className="container">


            <div className={cl.headerItems}>
                <Link href="/">
                <div className={cl.left}>
                    <div className={cl.headerTitle}>
                        Подвиг<br/> Народа <br/> <span>1942-1943</span>
                    </div>
                    <img 
                        className={cl.logoImg} 
                        src="./image/star-logo.png" 
                        alt="star" 
                    />
                </div>
                </Link>
                <button className={cl.link}>
                    {pathname == "/" ? "Главная страница" 
                    : pathname =="/hystory" ? "История" 
                    : pathname == "/admin" ? "Админ. панель" 
                    : pathname == "/history" ? "История" 
                    : "Профиль"}
                </button>
                <div className={cl.buttons}>
                {accessToken 
                ?
                    <div className={cl.account}>
                        <Link href="/user" style={{display: "flex", alignItems: "center"}}>
                        {profile &&
                        <img 
                            src={profile.avatatPath} 
                            alt={profile.email} width={40} 
                            height={40} 
                            style={{borderRadius: 30}}
                        />
                        }
                        <button className={cl.accountText} style={mont.style}>
                            {profile?.name}
                        </button>
                        </Link>
                        <button onClick={() => logout()} className={cl.logout}>
                            <FiLogIn/>
                        </button>
                    </div>
                :
                <Link href="/register">
                <button className={cl.auth} style={mont.style}>
                    Создать аккаунт
                </button>
                </Link>
                }
                </div>
            </div>


        </div>
    </header>
    )
}

export default header
