"use client"

import {useState, FC, useEffect} from 'react'
import { api } from '@/src/redux/api/api'
import { useAuth } from '@/src/hooks/useAuth'
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io"
import ChangeForm from '../ChangeForm/ChangeForm'
import CommentBlock from '../CommentBlock/CommentBlock'

import cl from "./UserProfile.module.scss"
import {mont} from "./../../../../app/layout"
import Image from 'next/image'

const UserProfile: FC = () => {

    const [openChange, setOpenChange] = useState(false)
    const {accessToken} = useAuth()
    const {data: profile, isLoading} = api.useGetProfileQuery(null, {
        skip: !accessToken
    })

    if(isLoading) return null

    if(!profile) return null

    return (
        <div className={cl.profile}>
        <div className="container">
            <div className={cl.profileItems}>
                <div className={cl.inf}>
                    <div className={cl.image}>
                        <img 
                            src={profile?.avatatPath} 
                            alt={profile?.name} 
                            width={400} 
                            height={400} 
                        />
                    </div>
                    <div className={cl.row}>    
                        <div className={cl.column}>
                            <span>ПОЧТА<br/></span>
                            {profile?.email}
                        </div>
                        <div className={cl.column}>
                            <span>ИМЯ ПОЛЬЗОВАТЕЛЯ<br/></span>
                            {profile?.name}
                        </div>
                        <div className={cl.column}>
                            <span>СОЗДАН<br/></span>
                            {profile?.createAt.toString()}
                        </div>
                        {openChange 
                        ? 
                        <button onClick={() => setOpenChange(!openChange)} className={cl.change} style={mont.style}>
                           Закрыть <IoIosArrowUp/> 
                        </button>
                        :
                        <button onClick={() => setOpenChange(!openChange)} className={cl.change} style={mont.style}>
                            Изменить <IoIosArrowDown/>
                        </button>
                        }
                        {openChange && profile &&
                            <ChangeForm setOpen={setOpenChange} open={openChange} userId={profile.id}/>
                        }
                    </div>
                </div>
                <CommentBlock userId={profile?.id}/>
            </div>
        </div>
        </div>
    )
}

export default UserProfile
