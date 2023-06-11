"use client"

import { Provider } from 'react-redux'
import { Montserrat } from 'next/font/google'
import { persistor, store } from '@/src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import './globals.css'
import { Metadata } from 'next'

export const mont = Montserrat({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Ветераны',
  description: 'Список ветеранов из города Златоуст Челябинской области, принимавшие участие в Сталинградской битве',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        
        <html lang="ru">
                <head>
                    <base href="/"/>
                    <link rel="shortcut icon" href="./image/logo-icon.png" />
                    <title>
                        Ветераны
                    </title>
                </head>
                <body style={mont.style}>
                <Provider store={store}>
                <PersistGate persistor={persistor} loading={false}>
                    {children}
                </PersistGate>    
                </Provider>
                </body>
        </html>
        
    )
}
