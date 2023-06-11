import {ChangeEvent, FC} from 'react'
import validator from 'validator'
import { api } from '@/src/redux/api/api';
import { SubmitHandler, useForm } from 'react-hook-form';

import cl from "./ChangeForm.module.scss"
import {mont} from "./../../../../app/layout"

const ChangeForm: FC<{
    userId: number;
    setOpen: (a: boolean) => void;
    open: boolean;
}> = ({userId, setOpen, open}) => {

    const {data: user} = api.useGetByIdQuery(userId)
    const [updateUser] = api.useUpdateUserMutation()

    const {register, handleSubmit, formState: {errors}} = useForm<{
        name: string;
        email: string;
    }>()
    const submit: SubmitHandler<{
        name: string;
        email: string;
    }> = data => {
        updateUser(data)
        setOpen(!open)
    }

    const [changeAvatar] = api.useChangeAvatarMutation()

    const uploadData = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files?.length) return

        const formData = new FormData()
        formData.append('media', files[0])

        changeAvatar({media: formData})
    }

    return (
        <form className={cl.form} onSubmit={handleSubmit(submit)}>
            <input 
                type="file"
                className={cl.input}
                style={mont.style} 
                onChange={uploadData}
            />
            <input
                {...register("name", {required: true, minLength: 3, maxLength: 30})}
                type="text" 
                placeholder='Новое имя'
                className={cl.input}
                defaultValue={user?.name}
                style={mont.style}
            />
            {errors.name &&
                <h3 style={{color: 'red', fontSize: "16px"}}>
                    3 - 30 СИМВОЛОВ
                </h3>
            }

            <input 
                {...register("email", {required: true, validate: input => validator.isEmail(input)})}
                type="text" 
                placeholder='Новая почта'
                className={cl.input}
                defaultValue={user?.email}
                style={mont.style}
            />
            {errors.email &&
                <h3 style={{color: 'red', fontSize: "16px"}}>
                    НЕВЕРНО
                </h3>
            }
            <br/>   
            <button className={cl.submit} style={mont.style}>
                Изменить
            </button>
        </form>
    )
}

export default ChangeForm
