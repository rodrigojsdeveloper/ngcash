import { Switch, Route } from 'react-router-dom'
import { NotFound } from '../pages/Not Found'
import { Register } from '../pages/Register'
import { Session } from '../pages/Session'
import { Home } from '../pages/Home'


const Routes = () => {

    return (

        <Switch>
            <Route path='/session'>
                <Session />
            </Route>

            <Route path='/home'>
                <Home />
            </Route>

            <Route exact path='/'>
                <Register />
            </Route>

            <Route component={ NotFound } />
        </Switch>
    )
}

export { Routes }
