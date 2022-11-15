import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { Button } from "../Button"
import { Input } from "../Input"
import { Container, Content } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"


const Modal = () => {

    const [ transactions, setTransaction ] = useState<any>()

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
            .then(res => setTransaction(res))
            .catch(err => console.error(err))

        }, [])
    }

    return (
        <Container>
            <Content onSubmit={ handleSubmit(onSubmitFunc) }>
                <Input
                name="username"
                placeholder="username"
                register={ register }
                error={ errors.username?.message as string }
                />

                <Input
                name="value"
                placeholder="value"
                register={ register }
                error={ errors.value?.message as string }
                />

                <Button type="submit">Submit</Button>
            </Content>
        </Container>
    )
}

export { Modal }
