import { useDispatch } from "react-redux"
import * as AuthActions from "../redux/auth/auth.actions"
import {useMemo} from 'react'
import { bindActionCreators } from "redux"

export const rootActions = {
    ...AuthActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}