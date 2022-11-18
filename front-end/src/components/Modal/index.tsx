import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { Button } from "../Button"
import { Input } from "../Input"
import { Container } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"


interface IModal {
    setOpenTransaction: any
    addTransactions: any
}

const Modal = ({ setOpenTransaction, addTransactions }: IModal) => {

    const schema = yup.object().shape({
        username: yup
            .string()
            .required('username required')
            .min(3, 'username must contain at least 3 characters'),

        value: yup
            .number()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSubmitFunc = (data: object) => {

        useEffect(() => {

            api.post('/transactions', data, {

                headers: {
                    Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
                }
            })
            .then(res => {
                
                setOpenTransaction(false)

                addTransactions(res.data)
            })
            .catch(err => console.error(err))

        }, [])
    }

    return (
        <Container onSubmit={ handleSubmit(onSubmitFunc) }>

            <div>
                <h1>Transaction</h1>

                <main>
                    <Input
                    name="value"
                    placeholder="Value"
                    register={ register }
                    error={ errors.username?.message as string }
                    />

                    <Input
                    name="username"
                    placeholder="Username"
                    register={ register }
                    error={ errors.value?.message as string }
                    />

                    <Button type="submit">Submit</Button>
                </main>
            </div>
            
        </Container>
    )
}

export { Modal }
