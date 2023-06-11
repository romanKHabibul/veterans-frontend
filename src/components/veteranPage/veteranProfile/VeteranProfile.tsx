import React, { FC } from 'react'
import { api } from '@/src/redux/api/api'
import Description from '../description/Description'

import cl from "./VeteranProfile.module.scss"

interface IProps {
    id: number;
}

function VeteranProfile({id}: IProps){

    const {data: veterans} = api.useGetVeteransQuery(null)
    const information = veterans && veterans.find(veteran => veteran.id == id)

    return (
        information 
        ?
        <div className={cl.profile}>
        <div className="container">
            <div className={cl.profileItems}>
                <div className={cl.fio}>
                    <div className={cl.image}>
                        <img src={information.imagePath} alt={information.surname} />
                    </div>
                    <Description inf={information}/>
                </div>
                <div className={cl.description}>
                    <h2 className={cl.title}>
                        Описание жизни:
                    </h2>
                    <p className={cl.text}>
                        {information.description}
                    </p>
                </div>
            </div>
        </div>
        </div>
        :
        <h2>Такого ветерана нет</h2>
    )
}

export default VeteranProfile

