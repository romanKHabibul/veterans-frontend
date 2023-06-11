"use client"

import React from 'react'
import Header from "../../src/components/mainPage/header/Header"
import UserProfile from '@/src/components/userPage/userProfile/UserProfile'
import Footer from '@/src/components/mainPage/footer/Footer'

const page = () => {
    return (
        <>
        <Header/>
        <UserProfile/>
        <Footer/>
        </>
    )
}

export default page
