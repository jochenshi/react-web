import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/index';
import Site from './components/Site/index';

import {isClient} from './utils/util';
// import 'antd/dist/antd.css';
// import 'antd-mobile/dist/antd-mobile.css';
// import './style/index.styl';

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
