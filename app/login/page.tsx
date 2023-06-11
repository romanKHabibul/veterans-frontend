import PrivateRoute from '@/src/components/auth/PrivateRoute'
import AuthForm from '@/src/components/auth/form/AuthForm'
import { Metadata } from 'next'
import React from 'react'

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
