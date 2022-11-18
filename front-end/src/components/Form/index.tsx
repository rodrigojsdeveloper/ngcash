import { Button } from "../Button"
import { Container } from "./style"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from "../../services/api"
import { Link, useHistory } from "react-router-dom"
import { useState } from "react"


interface IFormProps {
    apiProp: string,
    historyProp: string
    titleProp: string
    textProp: string
    linkProp: string
}

const Form = ({ apiProp, historyProp, titleProp, textProp, linkProp }: IFormProps) => {

    const [ load, setLoad ] = useState(false)

    const history = useHistory()

    const schema = yup.object().shape({
        
        username: yup
                .string()
                .required('Username required')
                .min(3, 'Username must contain at least 3 characters'),
        password: yup
                .string()
                .required('Password required')
                .min(8, 'Password must contain at least 8 characters')
                .matches(
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                    'The password must contain capital letters, numbers and special characters!'
                )
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSumbitFunction = (data: object) => {

        setLoad(true)
        
        api.post(`/${ apiProp }`, data, {
        
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => {

            if(apiProp == 'session') {

                localStorage.setItem('Project NG.CASH: token', res.data.token)
            }

            history.push(`/${ historyProp }`)
        })
        .catch(err => console.error(err))
        .finally(() => setLoad(false))
    }

    return (
        <Container onSubmit={ handleSubmit(onSumbitFunction) }>

            <h1>{ titleProp }</h1>

            <main>
                <label>{ errors.username?.message as string }</label>
                <input
                placeholder="Username"
                type="text"
                { ...register("username") }
                />

                <label>{ errors.password?.message as string }</label>
                <input
                placeholder="Password"
                type="password"
                { ...register("password") }
                />

                <Button buttonStyle="register" type="submit" disabled={ load }>{
                    load ? 'Sending...' : 'Submit'
                }</Button>
            </main>

            <p>{ textProp }<Link to={ `/${ linkProp }` }>click here</Link>.</p>

        </Container>
    )
}

export { Form }
