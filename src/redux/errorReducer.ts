const SET_ERROR = 'error/SET_ERROR'

const InitialState = {
    globalError: ''
}

type InitialStateType = typeof InitialState

export const errorReducer = (state = InitialState, action: any): InitialStateType => {
    switch (action.type) {
    case SET_ERROR:
        return {
            ...state,
            globalError: action.payload
        }
    default:
        return state
    }
}

export const setError = (error: string) => ({
    type: 'error/SET_ERROR',
    payload: error
})