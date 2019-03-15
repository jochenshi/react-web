import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navigation from '../../components/Navigation/index';
import HomePage from '../../pages/HomePage/index';

class Site extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileSideBarOpen: false
        };
    }

    render() {
        return (
            <div className="site">
                <Navigation/>  
                <Switch>
                    <Route path="/" exact component={HomePage} /> 
                </Switch>
            </div>
        );
    }
}

export default Site;