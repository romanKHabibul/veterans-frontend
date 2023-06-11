import {ChangeEvent, FC, useState} from 'react'
import Link from 'next/link'
import { IVeteran } from '@/src/@types/veterans.types'
import { useAuth } from '@/src/hooks/useAuth'
import { api } from '@/src/redux/api/api'
import {motion} from 'framer-motion'

import cl from "./VeteranCard.module.scss"
import {mont} from "./../../../../app/layout"

const VeteranCard: FC<{
    inf: IVeteran;
}> = ({inf}) => {

    const {accessToken} = useAuth()
    const {data: profile} = api.useGetProfileQuery(null, {
        skip: !accessToken
    })

    const [addImage] = api.useAddImageMutation()

    const cardAnimation = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
        })
    }

    const uploadData = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files?.length) return

        const formData = new FormData()
        formData.append('media', files[0])

        addImage({id: inf.id, media: formData})
    }

    return (
        <motion.div
            className={cl.card}
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
        >
            <Link href={`/veterans/${inf.id}`}>
            <img 
                src={inf.imagePath} 
                alt={inf.surname} 
                className={cl.veteranImg}
                style={{borderRadius: "10px 0 0 10px"}}
            />
            </Link>
            <div className={cl.inf}>
                <Link href={`/veterans/${inf.id}`}>
                <h3 className={cl.title}>
                    {inf.surname + ' ' + inf.name + ' ' + inf.patronomyc}
                </h3>
                <h4 className={cl.date}>
                    {inf.dates}
                </h4>
                <button className={cl.more} style={mont.style} >
                    Узнать больше
                </button>
                </Link>
            </div>
            {profile && profile.role == "ADMIN" &&
                <input 
                type="file" 
                className={cl.addFile} 
                style={mont.style}
                onChange={uploadData}
                />
            }
        </motion.div>
    )
}

export default VeteranCard
