"use client"

import React, { FC, PropsWithChildren } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/navigation'

const PrivateRoute: FC<{
    children: React.ReactNode;
}> = ({children}) => {

    const {accessToken} = useAuth()
    const {replace} = useRouter()

    if(accessToken){
        replace("/")
        return null
    } 

    return (
        <>
        {children}
        </>
    )
}

export default PrivateRoute
