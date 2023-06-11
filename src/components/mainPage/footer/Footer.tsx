import React from 'react'
import FeedBackForm from '../feedBackForm/FeedBackForm'

import cl from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={cl.footer}>
        <div className="container">
            <div className={cl.footerItems}>
                <div className={cl.left}>
                    <FeedBackForm/>
                </div>
                <div className={cl.right}>
                    <p className={cl.footerText}>
                    ИНФОРМАЦИЯ ОГРАНИЧЕННОГО ДОСТУПА, ПРЕДУСМОТРЕННАЯ ЗАКОНОДАТЕЛЬСТВОМ РОССИЙСКОЙ ФЕДЕРАЦИИ, В СОСТАВЕ ОБД «ПОДВИГ НАРОДА В ВЕЛИКОЙ ОТЕЧЕСТВЕННОЙ ВОЙНЕ 1941-1945 ГГ.» НЕ ПУБЛИКУЕТСЯ.<br/><br/>

                    ИНФОРМАЦИЯ, ЯВЛЯЮЩАЯСЯ НЕДОСТОВЕРНОЙ, ОТКРЫТО ИЗДЕВАЮЩЕЙСЯ НАД СОБЫТИЯМИ ПРОШЛЫХ ЛЕТ УГОЛОВНО НАКАЗУЕМА Федеральным законом от 05.04.2021 N 59-ФЗ "О внесении изменений в статью 354.1 Уголовного кодекса Российской Федерации" (вступил в силу с 16.04.2021) И РЕГУЛЯРНО ОТСЛЕЖИВАЕТСЯ АДМИНИСТРАЦИЕЙ САЙТА С НАПРАВЛЕНИЕМ В СООТВЕТСТВУЮЩИЕ ОРГАНЫ.
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
