import axios from 'axios'

import {FormValuesType} from '../components/types';


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/1/',
})

export const formAPI = {
    sendForm(value: FormValuesType) {
        return instance.post('posts', value)
    }
}