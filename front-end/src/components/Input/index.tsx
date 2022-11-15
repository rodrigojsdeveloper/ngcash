import { InputHTMLAttributes } from "react"
import { Container, InputContainer } from "./style"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    label?: string
    error: string
    register: Function
    name: string
}

const Input = ({ placeholder, label, error = "", register, name, ...rest }: InputProps) => {

    return (
        <Container>
            <div>
                { label } { !!error && <span> - { error }</span> }
            </div>

            <InputContainer isErrored={ !!error }>
                <input { ...register(name) } { ...rest } />
            </InputContainer>
        </Container>
    )
}

export { Input }
