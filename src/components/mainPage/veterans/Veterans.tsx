"use client"

import {useEffect, useState} from 'react'
import {BiSearchAlt} from "react-icons/bi"
import {MdOutlineClose} from "react-icons/md"
import VeteranLoader from '../veteranLoader/VeteranLoader'
import { api } from '@/src/redux/api/api'
import VeteranCard from '../veteranCard/VeteranCard'

import cl from "./Veterans.module.scss"
import {mont} from "./../../../../app/layout"

const Veterans = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const {data: veterans, isLoading} = api.useGetVeteransQuery(null)

    return (
        <div className={cl.veterans} style={mont.style}>
        <div className="container">
            <div className={cl.veteransItems}>
                <div className={cl.search}>
                    <h2 className={cl.title}>
                        Ветераны
                    </h2>
                    <div className={cl.inputBlock}>
                    <div className={cl.lupa}>
                        <BiSearchAlt/>
                    </div>
                    <input 
                        className={cl.searchInput} 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Введите фамилию"
                        style={mont.style}
                    />
                    {searchTerm &&
                    <div className={cl.remove} onClick={() => setSearchTerm("")}>
                        <MdOutlineClose/>
                    </div>
                    }
                    </div>
                </div>

                <div className={cl.veteranCards}>
                    {isLoading ? <VeteranLoader/> : 

                    veterans?.length 
                        ?
                            searchTerm
                            ?
                            veterans.filter(e => 
                            e.surname.toLowerCase()
                                .includes(searchTerm.toLowerCase()) ||
                            e.name.toLowerCase()
                                .includes(searchTerm.toLowerCase()) || 
                            e.patronomyc.toLowerCase()
                                .includes(searchTerm.toLowerCase())   
                            )
                                .map(veteran => 
                                    <div key={veteran.id}>
                                        <VeteranCard inf={veteran}/>
                                    </div>
                                )
                            :
                            veterans.map(veteran => 
                                <div key={veteran.id}>
                                    <VeteranCard inf={veteran}/>
                                </div>
                            )
                        :
                            <h2 className={cl.empty}>
                                Не удалось получить данные
                            </h2>
                    }
                </div>

            </div>
        </div>
        </div>
    )
}

export default Veterans


