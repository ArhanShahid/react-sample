const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/app.component'

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={App} />
    </BrowserRouter>
    ,
    document.getElementById('root')
)