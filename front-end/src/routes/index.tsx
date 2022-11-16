import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/Not Found"
import { Register } from "../pages/Register"
import { Session } from "../pages/Session"


const Routes = () => {

    const [ authetication, setAuthetication ] = useState<any>(false)

    useEffect(() => {

        const token = localStorage.getItem('Project NG.CASH: token')

        if(token) {

            setAuthetication(true)
        }
    }, [])

    return (

        <Switch>
            <Route exact path='/'>
                <Register
                authetication={ authetication }
                />
            </Route>

            <Route path='/session'>
                <Session
                authetication={ authetication }
                setAuthetication={ setAuthetication }
                />
            </Route>

            <Route path='/home'>
                <Home
                setAuthetication={ setAuthetication }
                />
            </Route>

            <Route component={ NotFound } />
        </Switch>
    )
}

export { Routes }
