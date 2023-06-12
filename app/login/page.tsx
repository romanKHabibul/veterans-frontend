import PrivateRoute from '@/src/components/auth/PrivateRoute'
import AuthForm from '@/src/components/auth/form/AuthForm'
import { Metadata } from 'next'
import React from 'react'

const metadata: Metadata = {
    title: "Авторизация | Ветераны Златоуста",
    description: "Страница авторизации на сайте, посвящённом ветеранам Златоуста, принимавшим участие в Сталингрдаской битве"
}

const page = () => {
    return (
        <>
        <PrivateRoute>
            <AuthForm/>
        </PrivateRoute>
        </>
    )
}

export default page
