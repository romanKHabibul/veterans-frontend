"use client"

import Footer from '@/src/components/mainPage/footer/Footer'
import VeteranProfile from '@/src/components/veteranPage/veteranProfile/VeteranProfile'
import React from 'react'
import Header from "./../../../src/components/mainPage/header/Header"

type Props = {
    params: {
        id: number;
    },
}

const page = ({params: {id}}: Props) => {
    return (
        <>
        <Header/>
        <VeteranProfile id={id} />
        <Footer/>
        </>
    )
}

export default page



