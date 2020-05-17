import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import UserList from './UserList'

export default function Routes() {
    return (
        <Router>
            <header>
                <nav>
                    <Link to="/" className="App-link">
                        Home
                    </Link>
                    <span>-</span>
                    <Link to="/users" className="App-link">
                        UsersAPI
                    </Link>
                </nav>
            </header>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/users" component={UserList}></Route>
                <Route path="*" children={<Error404/>} />
            </Switch>
        </Router>
    )
}
