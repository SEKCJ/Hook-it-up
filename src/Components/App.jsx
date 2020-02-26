import React, { } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Endpoint from './Endpoint'
import Detail from './Detail'

const App = () => {
    return (
        <Router>
            <Link to="/"></Link>
            <Switch>
                <Route exact path="/:id/details" component={Detail}></Route>
                <Route path="/" component={Endpoint}></Route>
            </Switch>
        </Router>
    )
}

export default App