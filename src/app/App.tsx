import React from 'react'

import './App.css'
import {LinearProgress} from '@mui/material'
import {useSelector} from 'react-redux'

import {Form} from '../components/Form'
import {ErrorSnackbar} from '../components/ErrorSnackbar'
import {SuccessSnackbar} from '../components/SuccessSnackbar'

import {selectIsError, selectIsLoading, selectIsSuccess} from './selectors'


function App() {
    const isLoading = useSelector(selectIsLoading)
    const isSuccess = useSelector(selectIsSuccess)
    const isError = useSelector(selectIsError)

    return (
        <div className="App">
            {isLoading && <LinearProgress />}
            <Form />
            {isError && <ErrorSnackbar />}
            {isSuccess && <SuccessSnackbar />}
        </div>
    );
}

export default App;
