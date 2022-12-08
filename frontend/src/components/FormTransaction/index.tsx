import { yupResolver } from '@hookform/resolvers/yup'
import { IFormTransaction } from '../../interfaces'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { Container } from './style'
import { Button } from '../Button'
import { useState } from 'react'
import * as yup from 'yup'


const FormTransaction = ({ addTransactions }: IFormTransaction) => {

    const [ load, setLoad ] = useState<boolean>(false)

    const schema = yup.object().shape({

        username: yup
            .string()
            .min(3, 'Username must contain at least 3 characters'),

        value: yup
            .number()
            .typeError('Amount must be a number'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSumbitFunction = (data: object) => {

        setLoad(true)

        api.post('/transactions', data, {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`,
            }
        })
        .then(res => {
            addTransactions(res.data)

            toast.success('Completed transaction')
        })
        .catch(_ => toast.error('Transaction error'))
        .finally(() => setLoad(false))
    }

    return (
        <Container onSubmit={ handleSubmit(onSumbitFunction) }>

            <div>
                <h1>Transaction</h1>

                <main>
                    <label>{ errors.value?.message as string }</label>
                    <input
                    placeholder="Value"
                    type="text"
                    { ...register("value") }
                    required={ true }
                    />

                    <label>{ errors.username?.message as string }</label>
                    <input
                    placeholder="Username"
                    type="text"
                    { ...register("username") }
                    required={ true }
                    />

                    <Button buttonStyle="register" type="submit" disabled={ load }>{
                        load ? 'Sending...' : 'Submit'
                    }</Button>
                </main>
            </div>
            
        </Container>
    )
}

export { FormTransaction }
