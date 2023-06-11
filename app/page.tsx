"use client"

import Preview from '@/src/components/mainPage/preview/Preview'
import About from '@/src/components/mainPage/about/About'
import Veterans from '@/src/components/mainPage/veterans/Veterans'
import Footer from '@/src/components/mainPage/footer/Footer'
import Header from './../src/components/mainPage/header/Header'
import Help from '@/src/components/mainPage/helps/Help'
import { useState } from 'react'

export default function Home() {

	const [isOpenHelp, setIsOpenHelp] = useState<boolean>(false)

	return (
		<>
		<Header/>
		<Preview setIsOpenHelp={setIsOpenHelp}/>
		<About/>
		<Veterans/>
		<Footer/>
		{isOpenHelp &&
			<Help setIsOpenHelp={setIsOpenHelp}/>
		}
		</>
	)
}
