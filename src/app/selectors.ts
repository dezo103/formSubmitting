import {AppRootStateType} from '../redux/store'

export const selectIsLoading = (state: AppRootStateType) => state.loading.isLoading
export const selectIsError = (state: AppRootStateType) => state.error.globalError
export const selectIsSuccess = (state: AppRootStateType) => state.success.successInfo