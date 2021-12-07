import React from 'react'
import { Routes } from 'react-router-dom';

import Dashboard from '../../views/dashboard/dashboard';

function routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Dashboard} />
            </Switch>
        </div>
    )
}

export default routes;