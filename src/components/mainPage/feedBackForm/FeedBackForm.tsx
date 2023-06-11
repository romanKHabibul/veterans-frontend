import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuth } from '@/src/hooks/useAuth'
import { api } from '@/src/redux/api/api'
import { useRouter } from 'next/navigation'

import cl from "./FeedBackForm.module.scss"
import {mont} from "./../../../../app/layout"

const FeedBackForm = () => {

    const {accessToken} = useAuth()
    const {push} = useRouter()
    const [addFeedback] = api.useAddFeedbackMutation()

    const {register, handleSubmit, reset, formState: {errors}} = useForm<{
        title: string;
        description: string;
    }> ()

    const submit: SubmitHandler<{
        title: string;
        description: string;
    }> = data => {
        if(accessToken){
            addFeedback(data)
            reset({title: "", description: ""})
        } else {
            push("/register")
        }
    }

    return (
        <form className={cl.feedback} onSubmit={handleSubmit(submit)}>
            <h2 className={cl.title}>
                Есть интересующие вопросы?
            </h2>

            <input 
                type="text" 
                {...register("title", {required: true, minLength: 10, maxLength: 50})}
                className={cl.feedbackInput}
                placeholder='Озаглавьте вопрос'
                style={mont.style}
            />
            {errors?.title &&
            <div style={{color: "red", margin: '0 0 10px', textTransform: 'uppercase'}}>
                Длина заголовка от 10 до 50 символов
            </div>
            }

            <input 
                type="text" 
                {...register("description", {required: true, minLength: 50, maxLength: 1500})}
                className={cl.feedbackInput}
                placeholder='Опишите, что вас интересует'
                style={mont.style}
            />
            {errors?.description &&
            <div style={{color: "red", margin: '0 0 10px', textTransform: 'uppercase'}}>
                Длина описания от 50 до 1500 символов
            </div>
            }
            
            <button type="submit" className={cl.submit}>
                Отправить 
            </button>
        </form>
    )
}

export default FeedBackForm
