import { Switch, Route } from 'react-router-dom'
import { NotFound } from '../pages/Not Found'
import { Register } from '../pages/Register'
import { useEffect, useState } from 'react'
import { Session } from '../pages/Session'
import { Home } from '../pages/Home'


const Routes = () => {

    const [ authentication, setAuthentication ] = useState<boolean>(false)

    useEffect(() => {

        const token = localStorage.getItem('Project NG.CASH: token')

        if(token) {

            setAuthentication(true)
        }
    }, [])

    return (

        <Switch>
            <Route path="/session">
                <Session
                authentication={ authentication }
                setAuthentication={ setAuthentication }
                />
            </Route>

            <Route path="/home">
                <Home
                setAuthentication={ setAuthentication }
                />
            </Route>

            <Route exact path="/">
                <Register
                authentication={ authentication }
                setAuthentication={ setAuthentication }
                />
            </Route>

            <Route component={ NotFound } />
        </Switch>
    )
}

export { Routes }
