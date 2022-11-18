import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { Button } from "../Button"
import { Input } from "../Input"
import { Container } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"


const Modal = ({ addTransactions }: any) => {

    const [ load, setLoad ] = useState(false)

    const schema = yup.object().shape({

        username: yup
            .string()
            .required('Username required')
            .min(3, 'Username must contain at least 3 characters'),

        value: yup
            .number()
            .required('Value required')
            .typeError('Amount must be a number')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSumbitFunction = (data: object) => {

        setLoad(true)

        useEffect(() => {

            api.post('/transactions', data, {

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`,
                }
            })
            .then(res => {

                addTransactions(res.data)

                console.log(res)
            })
            .catch(err => console.error(err))
            .finally(() => setLoad(false))

        }, [])
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
                    />

                    <label>{ errors.username?.message as string }</label>
                    <input
                    placeholder="Username"
                    type="text"
                    { ...register("username") }
                    />

                    <Button buttonStyle='register' type="submit" disabled={ load }>{
                        load ? 'Sending...' : 'Submit'
                    }</Button>
                </main>
            </div>
            
        </Container>
    )
}

export { Modal }
