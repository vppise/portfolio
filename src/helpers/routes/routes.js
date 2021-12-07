import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../../views/dashboard/dashboard';

function routes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default routes;