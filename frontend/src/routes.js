import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Party from './components/party/Party'
import FormEvents from './components/FormEvents/formEvents';
export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Main} />
                <Route path="/party/:id" component={Party} />
                <Route path="/create" component={FormEvents}/>
            </Switch>
        </BrowserRouter>
    )

}