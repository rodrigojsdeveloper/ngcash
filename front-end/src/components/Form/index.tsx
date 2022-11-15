import { Button } from "../Button"
import { Input } from "../Input"
import { Container } from "./style"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from "../../services/api"
import { useHistory } from "react-router-dom"


const Form = (apiProp: string, buttonProp: string, historyProp: string, setAuthentication: boolean) => {

    const history = useHistory()

    const schema = yup.object().shape({
        username: yup
            .string()
            .required('username required')
            .min(3, 'username must contain at least 3 characters'),
        email: yup
            .string()
            .required('password required')
            .min(8, 'password must contain at least 8 characters')
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                'A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais!'
            )
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSumbitFunction = (data: object) => {
        
        api.post(`/${ apiProp }`, data)
        .then(res => {

            if(apiProp == 'session') {

                localStorage.setItem('Project NG.CASH: token', res.data)

                setAuthentication(true)
            }

            history.push(`/${ historyProp }`)
        })
        .catch(err => console.error(err))
    }

    return (
        <Container onSubmit={ handleSubmit(onSumbitFunction) }>

            <Input
            placeholder="username"
            name="username"
            register={ register }
            error={ errors.username?.message as string }
            />

            <Input
            placeholder="password"
            name="password"
            register={ register }
            error={ errors.password?.message as string }
            />

            <Button type="submit">{ buttonProp }</Button>

        </Container>
    )
}

export { Form }
