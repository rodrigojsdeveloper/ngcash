import { Switch, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/Not Found"
import { Register } from "../pages/Register"
import { Session } from "../pages/Session"


const Routes = () => {

    return (

        <Switch>
            <Route path='/register'>
                <Register />
            </Route>

            <Route path='/session'>
                <Session />
            </Route>

            <Route path='/home'>
                <Home />
            </Route>

            <Route component={ NotFound } />
        </Switch>
    )
}

export { Routes }
