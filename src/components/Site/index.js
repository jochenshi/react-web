import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navigation from '../../components/Navigation/index';
import MobileNavigation from '../mobile/navigation';
import HomePage from '../../pages/HomePage/index';
import AboutPage from '../../pages/about/index';

import './style.styl';

class Site extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileSideBarOpen: false
        };
    }

    render() {
        return (
            <div className="site-content">
                <Navigation/>
                <MobileNavigation/>
                <div className={'main-content'}>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path={'/:as'} component={AboutPage}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Site;
