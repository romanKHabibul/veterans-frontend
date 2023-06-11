import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IVeteran } from '@/src/@types/veterans.types'
import { api } from '@/src/redux/api/api'

import cl from "./AddVeteran.module.scss"
import { mont } from '@/app/layout'

const AddVeteran = () => {

    const {reset, register, handleSubmit} = useForm<IVeteran>()
    const [addVeteran] = api.useAddVeteranMutation()

    const submit: SubmitHandler<IVeteran> = (data) => {
        if(data.description == ""){
            const {description, ...rest} = data
            
            addVeteran(rest)
            reseting()
        } else {
            addVeteran(data)
            reseting()
        }
    }

    function reseting(){
        reset({name: "", surname: "", patronomyc: "", dates: "", grades: "", description: ""})
    }

    return (
        <form 
            className={cl.form} 
            onSubmit={handleSubmit(submit)}
            style={mont.style}
        >
            <div className={cl.right}>
                <input 
                    {...register("surname", {required: true})}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Фамилия'
                    style={mont.style}
                    />
                <input 
                    {...register("name")}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Имя'
                    style={mont.style}
                    />  
                <input 
                    {...register("patronomyc")}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Отчество'
                    style={mont.style}
                    />
                <input 
                    {...register("dates")}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Время жизни'
                    style={mont.style}
                    />
                <input 
                    {...register("grades")}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Достижения'
                    style={mont.style}
                    />
                <input 
                    {...register("description")}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Описание'
                    style={mont.style}
                    />
                <button onClick={() => reseting()} className={cl.submit} style={mont.style}>
                    Очистить поля
                </button>
                <button className={cl.submit} style={mont.style}>
                    Добавить карточку
                </button>
            </div>
        </form>
    )
}

export default AddVeteran
