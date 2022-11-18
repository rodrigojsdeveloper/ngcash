import { Container } from "./style"


interface InputProps {
    placeholder?: string
    type?: string
    name: string | undefined
}

const Input = ({ placeholder, type }: InputProps) => {

    return (
        <Container placeholder={ placeholder } type={ type } />
    )
}

export { Input }
