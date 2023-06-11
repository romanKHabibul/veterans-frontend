"use client"

import AdminProfile from '@/src/components/adminPage/adminProfile/AdminProfile'
import React from 'react'
import Header from "../../src/components/mainPage/header/Header"
import Footer from '@/src/components/mainPage/footer/Footer'

const Admin = () => {
    return (
        <>
        <Header/>
        <AdminProfile/>
        <Footer/>
        </>
    )
}

export default Admin
