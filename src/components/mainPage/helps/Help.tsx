import React, { FC } from 'react'
import {AiOutlineClose} from "react-icons/ai"

import cl from "./Help.module.scss"

const Help: FC<{
    setIsOpenHelp: (arg: boolean) => void
}> = ({setIsOpenHelp}) => {
    return (
        <div className={cl.help}>
            <div onClick={() => setIsOpenHelp(false)} className={cl.closeArea}/>
            <div 
                className={cl.helpItems}
            >
                <button onClick={() => setIsOpenHelp(false)} className={cl.closeButton}>
                    <AiOutlineClose/>
                </button>
                <h2 className={cl.title}>
                    Справка
                </h2>
                <ul className={cl.list}>
                    <li className={cl.listItem}>
                        <h3 className={cl.subtitle}>
                            Вопрос: Как добавить информацию о своём родственнике?
                        </h3>
                        <p className={cl.text}>
                            Ответ: Для того, чтобы отправить информацию вам необходимо выполнить 2 действия:<br/>
                            1: Создать аккаунт, либо войти в уже существующий в правом верхнем углу веб-ресурса;<br/>
                            2: Заполнить имеющейся информацией форму для обратной связи внижней части сайта и нажать "Отправить".
                        </p>
                    </li>
                    <li className={cl.listItem}>
                        <h3 className={cl.subtitle}>
                            Вопрос: Увидел/а ошибку на сайте, как исправить?
                        </h3>
                        <p className={cl.text}>
                            Ответ: Никто не застрахован от ошибок и мы в том числе. Если вы обнаружили ошибку на веб-ресурсе, сообщеите о ней через форму обратной связи в нижней части веб-ресурса.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Help
