import { Button } from "../Button"
import { Input } from "../Input"
import { Container } from "./style"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from "../../services/api"
import { useHistory } from "react-router-dom"


interface IForm {
    apiProp: string,
    buttonProp: string
    historyProp: string
    titleProp: string
}

const Form = ({ apiProp, buttonProp, historyProp, titleProp }: IForm, setAuthentication: any) => {

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
            }

            history.push(`/${ historyProp }`)
        })
        .catch(err => console.error(err))
    }

    return (
        <Container onSubmit={ handleSubmit(onSumbitFunction) }>

            <h1>{ titleProp }</h1>

            <main>
                <label>{ errors.username?.message as string }</label>
                <Input
                placeholder="username"
                register={ register }
                {...register("username")}
                />

                <label>{ errors.password?.message as string }</label>
                <Input
                placeholder="password"
                register={ register }
                {...register("password")}
                />

                <Button type="submit">{ buttonProp }</Button>
            </main>

        </Container>
    )
}

export { Form }
