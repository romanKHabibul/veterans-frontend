import {FC} from 'react'
import { api } from '@/src/redux/api/api'
import CommentCard from '../../adminPage/commentCard/CommentCard'

import cl from "./CommentBlock.module.scss"

const CommentBlock: FC<{userId: number | undefined}> = ({userId}) => {
//async function CommentBlock({userId}: {userId: number}){

    //const comments = await getFeedback()
    const {data: comments} = api.useGetFeedBackQuery(null)
    const getted = comments?.filter(e => e.userId.id == userId)

    return (
        <div className={cl.comments}>
            {getted && getted.length > 0
            ? 
            getted.map((comment, index) => 
                <CommentCard id={index} inf={comment} key={comment.id}/>
            )
            :
            <div className={cl.empty}>
                Вы еще не оставляли вопросов
            </div>
            }
        </div>
    )
}

export default CommentBlock

