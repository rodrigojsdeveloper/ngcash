import { Container } from "./style"
import React from "react"


interface IButton {
    children: React.ReactNode
    rest: any
}

const Button = ({ ...rest }, { children }: IButton) => {

    return (
        <Container buttonStyle="register" { ...rest }>
            { children }
        </Container>
    )
}

export { Button }
