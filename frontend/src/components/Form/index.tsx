import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useHistory } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { IFormProps } from '../../interfaces'
import { BiLockAlt } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { Container } from './style'
import { Button } from '../Button'
import { useState } from 'react'
import * as yup from 'yup'


const Form = ({ apiProp, historyProp, titleProp, textProp, linkProp }: IFormProps) => {
    
    const history = useHistory()

    const [ load, setLoad ] = useState<boolean>(false)

    const schema = yup.object().shape({
        
        username: yup
                .string()
                .min(3, 'Username must contain at least 3 characters'),
        password: yup
                .string()
                .min(8, 'Password must contain at least 8 characters')
                .matches(
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                    'The password must contain capital letters and numbers!'
                )
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSumbitFunction = (data: object) => {

        setLoad(true)
        
        api.post(`/${ apiProp }`, data, {
        
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => {

            if(apiProp == 'session') {

                localStorage.setItem('Project NG.CASH: token', res.data.token)

                toast.success('Login completed')
            }

            if(apiProp == 'users') {

                toast.success('Register completed')
            }

            history.push(`/${ historyProp }`)
        })
        .catch(_ => toast.error('Oops! An error occured'))
        .finally(() => setLoad(false))
    }

    return (
        <Container onSubmit={ handleSubmit(onSumbitFunction) }>

            <h1>{ titleProp }</h1>

            <main>
                <label>{ errors.username?.message as string }</label>
                <div>
                    <AiOutlineUser />
                    <input
                    placeholder="Username"
                    type="text"
                    { ...register("username") }
                    required={ true }
                    autoComplete="off"
                    />
                </div>

                <label>{ errors.password?.message as string }</label>
                <div>
                    <BiLockAlt />
                    <input
                    placeholder="Password"
                    type="password"
                    { ...register("password") }
                    required={ true }
                    />
                </div>

                <Button buttonStyle="register" type="submit" disabled={ load }>{
                    load ? 'Sending...' : 'Submit'
                }</Button>
            </main>

            <p>{ textProp }<Link to={ `/${ linkProp }` }>click here</Link>.</p>

        </Container>
    )
}

export { Form }
