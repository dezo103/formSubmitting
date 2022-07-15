import {Dispatch} from 'redux'

import {formAPI} from '../api/formAPI'

import {FormValuesType} from '../components/types'

import {setError} from './errorReducer'
import {setSuccess} from './successReducer'


const SET_IS_LOADING = 'loading/SET_IS_LOADING'

const InitialState = {
    isLoading: false
}

type InitialStateType = typeof InitialState

export const loadingReducer = (state = InitialState, action: any): InitialStateType => {
    switch (action.type) {
    case SET_IS_LOADING:
        return {
            ...state,
            isLoading: action.payload
        }
    default:
        return state
    }
}

export const setIsLoading = (value: boolean) => ({
    type: 'loading/SET_IS_LOADING',
    payload: value
})

export const sendMessage = (values: FormValuesType) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    try {
        await formAPI.sendForm(values)
        dispatch(setSuccess('Data sent successfully'))
    } catch (err) {
        dispatch(setError('Some error occurred'))
    } finally {
        dispatch(setIsLoading(false))
    }
}