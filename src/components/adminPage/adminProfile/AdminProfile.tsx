import React from 'react'
import CommentCard from '../commentCard/CommentCard'
import { api } from '@/src/redux/api/api'
import VeteranCard from '../veteranCard/VeteranCard'
import AddVeteran from '../addVeteran/AddVeteran'

import cl from "./AdminProfile.module.scss"

const AdminProfile = () => {

    const {data: feedback} = api.useGetFeedBackQuery(null)
    const {data: veterans} = api.useGetVeteransQuery(null)

    return (
        <div className="container">
        <div className={cl.profile}>
            <h2 className={cl.title}>
                Вопросы пользователей
            </h2>
            <div className={cl.comments}>
                {feedback 
                ?
                feedback.map((feedback, index) => 
                    <CommentCard inf={feedback} id={index} key={feedback.id}/>
                )
                :
                <h3 className={cl.isNull} style={{textAlign: "center", width: "100%"}}>
                    К сожалению, вопросов больше нет.<br/>Проверьте этот раздел чуть попозже.😔
                </h3>
                }
            </div>
            <h2 className={cl.title}>
                Добавление карточки
            </h2>
            <AddVeteran/>
            <h2 className={cl.title}>
                Ветераны
            </h2>
            <div className={cl.veterans}>
            {veterans && veterans.length > 0 
                ?
                veterans.map((veteran, index) => 
                    <VeteranCard inf={veteran} id={index} key={veteran.id}/>
                )
                :
                <h3 className={cl.isNull}>
                    К сожалению, не удалось получить список ветеранов.<br/>Повторите попытку позже.😔
                    <img 
                        src="./image/empty.png" 
                        alt="Пустота" 
                        style={{width: 500}}
                    />
                </h3>
                }
            </div>
        </div>
        </div>
    )
}

export default AdminProfile
