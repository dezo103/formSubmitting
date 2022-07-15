const SET_SUCCESS = 'success/SET_SUCCESS'

const InitialState = {
    successInfo: ''
}

type InitialStateType = typeof InitialState

export const successReducer = (state = InitialState, action: any): InitialStateType => {
    switch (action.type) {
    case SET_SUCCESS:
        return {
            ...state,
            successInfo: action.payload
        }
    default:
        return state
    }
}

export const setSuccess = (successInfo: string) => ({
    type: 'success/SET_SUCCESS',
    payload: successInfo
})
