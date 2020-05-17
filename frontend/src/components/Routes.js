import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'

export default function Routes() {
    return (
        <Router>
            <header>
                <nav>
                    <Link to="/" className="App-link">
                        Home
                    </Link>
                </nav>
            </header>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="*" children={<Error404/>} />
            </Switch>
        </Router>
    )
}
