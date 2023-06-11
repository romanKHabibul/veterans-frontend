import {FC} from 'react'
import { IFeedback } from '@/src/@types/feedback.types';
import { api } from '@/src/redux/api/api';

import cl from "./CommentCard.module.scss"

const CommentCard: FC<{
    inf: IFeedback;
    id: number
}> = ({inf, id}) => {

    const {data: users} = api.useGetUsersQuery(null)

    const currentUser = users && users.find(e => e.id == inf.userId.id)

    const [removeFeedback] = api.useRemoveFeedbackMutation()

    return (
        <div className={cl.card}>
            <h5 className={cl.number}>
                Вопрос #{id+1}, id#{inf.id}
            </h5>
            <h5 className={cl.user}>
                Пользователь - {currentUser?.name}
            </h5>
            <h5 className={cl.user}>
                Почта - {currentUser?.email}
            </h5>
            <h5 className={cl.date}>
                {inf.createAt.toString()}
            </h5>
            <h3 className={cl.title}>
                {inf.title}
            </h3>
            <p className={cl.text}>
                {inf.description}
            </p>
            <button onClick={() => removeFeedback(inf.id)} className={cl.remove}>
                Удалить вопрос
            </button>
        </div>
    )
}

export default CommentCard
