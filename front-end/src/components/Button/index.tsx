import { Container } from "./style"
import { ReactNode } from "react"


interface IButton { 
    lenButton: string
    children: ReactNode
}

const Button = ({ ...rest }, { lenButton, children }: IButton) => {

    return (
        <Container lenButton={ lenButton } { ...rest }>
            { children }
        </Container>
    )
}

export { Button }
