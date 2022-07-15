import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, {AlertProps} from '@mui/material/Alert'
import {useSelector} from 'react-redux'

import {selectIsError} from '../app/selectors'
import {useAppDispatch} from '../redux/store'
import {setError} from '../redux/errorReducer'


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
});

export function ErrorSnackbar() {
    const isError = useSelector(selectIsError)
    const dispatch = useAppDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            dispatch(setError(''))
        }
        dispatch(setError(''))
    };

    return (
        <Snackbar open={isError !== '' } autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {isError}
            </Alert>
        </Snackbar>
    )
}

