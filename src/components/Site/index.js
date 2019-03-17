import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navigation from '../../components/Navigation/index';
import MobileNavigation from '../mobile/navigation';
import HomePage from '../../pages/HomePage/index';
import FootArea from '../../components/bottomFooter/index';

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
                <MobileNavigation/>
                <Switch>
                    <Route path="/" exact component={HomePage} /> 
                </Switch>
                {/*<FootArea/>*/}
            </div>
        );
    }
}

export default Site;