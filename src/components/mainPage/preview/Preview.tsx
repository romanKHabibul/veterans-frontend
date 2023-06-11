"use client"

import React, { FC } from 'react'
import Link from 'next/link'
import { api } from '@/src/redux/api/api'
import { useAuth } from '@/src/hooks/useAuth'
import {motion} from "framer-motion"

import cl from "./Preview.module.scss"

const Preview: FC<{
    setIsOpenHelp: (arg: boolean) => void;
}> = ({setIsOpenHelp}) => {

    const {accessToken} = useAuth()
    const {data: profile} = api.useGetProfileQuery(null, {
        skip: !accessToken
    })

    const titleAnimation = {
        hidden: {
            x: -500,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {delay: 1}
        }
    }

    return (
        <>
        <div className={cl.prev}>
            <div className="container">
                <div className={cl.prevItems}>
                    <div className={cl.left}>
                        <h2 className={cl.title}>
                            СТАЛИНГРАДСКАЯ БИТВА
                        </h2>
                        <h3 className={cl.subtitle}>
                            Подвиг народа
                        </h3>
                    </div>
                    <div className={cl.right}>
                        {profile?.role == "ADMIN" &&
                            <Link href="/admin">
                            <button className={cl.nav}>
                                Админ. панель
                            </button>
                            </Link>
                        }
                        <Link href="/history">
                        <button className={cl.nav} style={{borderLeft: "2px solid #c1a886"}}>
                            История
                        </button>
                        </Link>
                        <button onClick={() => setIsOpenHelp(true)} className={cl.nav} style={{borderLeft: "2px solid #c1a886"}}>
                            Справка
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className={cl.logo} >
            <motion.h2 
                className={cl.logoTitle}
                variants={titleAnimation} 
                initial="hidden"
                whileInView="visible"
            >
                ГЕРОИ СТАЛИНГРАДСКОЙ БИТВЫ ГОРОД ЗЛАТОУСТ
            </motion.h2>
        </div>
        </>
    )
}

export default Preview
