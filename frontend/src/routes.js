import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Party from './components/party/Party'
export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Main} />
                <Route path="/party/:id" component={Party} />
            </Switch>
        </BrowserRouter>
    )

}