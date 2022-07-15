import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'

import {useDispatch} from 'react-redux'

import {errorReducer} from './errorReducer'
import {successReducer} from './successReducer'
import {loadingReducer} from './loadingReducer'


export const rootReducer = combineReducers({
    loading: loadingReducer,
    success: successReducer,
    error: errorReducer
})

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, AnyAction>>()

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>
