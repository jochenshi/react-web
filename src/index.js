import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/index';
import Site from './pages/Site/index';

import {isClient} from './utils/util';
import 'antd/dist/antd.css';

ReactDOM.render((
        <BrowserRouter id={"asdasd"}>
            <Route
                path="/"
                component={Site}
            />
        </BrowserRouter>   
    ),
    document.getElementById('root')
);