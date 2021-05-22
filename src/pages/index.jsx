import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Import Route
import List from './list'
import AddList from './add'

function Main() {
    return (
        <Switch>
            <div className="app">
                <div className="app-box">
                    <header className="app-header">
                        <span className="app-title">Todo List</span>
                    </header>
                    <Route exact path="/" component={List} />
                    <Route path="/add" component={AddList} />
                    <Route path="/edit/:id" />
                </div>
            </div>
        </Switch>
    )
}

export default Main
