import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, {AlertProps} from '@mui/material/Alert'
import {useSelector} from 'react-redux'

import {useAppDispatch} from '../redux/store'
import {setSuccess} from '../redux/successReducer'
import {selectIsSuccess} from '../app/selectors'


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
});

export function SuccessSnackbar() {
    const isSuccess = useSelector(selectIsSuccess)
    const dispatch = useAppDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            dispatch(setSuccess(''))
        }
        dispatch(setSuccess(''))
    };

    return (
        <Snackbar open={isSuccess !== '' } autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                {isSuccess}
            </Alert>
        </Snackbar>
    )
}

