import { Container } from "./style"
import { ReactNode } from "react"


const Button = ({ ...rest }, lenButton: string, children: ReactNode) => {

    return (
        <Container lenButton={ lenButton } { ...rest }>
            { children }
        </Container>
    )
}

export { Button }
