"use client"

import History from '@/src/components/historyPage/History'
import Header from './../../src/components/mainPage/header/Header'
import React from 'react'
import Footer from '@/src/components/mainPage/footer/Footer'

const page = () => {
    return (
        <>
        <Header/>
        <History/>
        <Footer/>
        </>
    )
}

export default page
