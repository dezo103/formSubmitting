import React from 'react'

import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {useFormik} from 'formik'

import {sendMessage} from '../redux/loadingReducer'
import {useAppDispatch} from '../redux/store'

import {FormikErrorType, FormValuesType} from './types'


export const Form = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            name: ''

        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.name) {
                errors.name = 'Required'
            } else if (values.name.length < 2) {
                errors.name = 'Must be 2 characters or more'
            }

            return errors
        },
        onSubmit: (values:FormValuesType) => {
            dispatch(sendMessage(values))
        },
    })

    return <Grid className="formWrapper">
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormGroup>
                    <TextField error={formik.touched.name && !!formik.errors.name}
                        type="name"
                        label="Name"
                        margin="normal"{...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name &&
                        <div style={{color: '#d52f2f'}}>{formik.errors.name}</div>}
                    <TextField error={formik.touched.email && !!formik.errors.email}
                        label="Email"
                        margin="normal"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email &&
                        <div style={{color: '#d52f2f'}}>{formik.errors.email}</div>}
                    <Button type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                        disabled={!!formik.errors.email || !!formik.errors.name}>
                        Send
                    </Button>
                </FormGroup>
            </FormControl>
        </form>
    </Grid>
}


