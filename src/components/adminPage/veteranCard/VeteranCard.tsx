import React, { FC } from 'react'
import { IVeteran } from '@/src/@types/veterans.types'
import { api } from '@/src/redux/api/api';

import cl from "./VeteranCard.module.scss"

const VeteranCard: FC<{
    inf: IVeteran;
    id: number;
}> = ({inf, id}) => {

    const [removeVeteran] = api.useRemoveVeteranMutation()

    return (
        <div className={cl.card}>
            <h5 className={cl.number}>
                Ветеран #{id+1}
            </h5>
            <h4 className={cl.date}>
                {inf.createAt?.toString()}
            </h4>
            <h2 className={cl.surname}>
                {inf.surname}
            </h2>
            <h3 className={cl.np}>
                {inf.name + ' ' + inf.patronomyc}
            </h3>
            <h4 className={cl.dates}>
                {inf.dates}
            </h4>
            <img 
                src={inf.imagePath} 
                alt={inf.surname} 
                style={{height: 300, width: 200, margin: "0 auto"}}
            />
            <textarea className={cl.text} defaultValue={"Описание: " + inf.description}/>
            <b className={cl.grades}>
                Достижения: {inf.grades}
            </b>
            <button onClick={() => removeVeteran(inf.id)} className={cl.remove}>
                Удалить карточку
            </button>
        </div>
    )
}

export default VeteranCard
