import React from 'react';
import AngelComponent from '../Component/component';
import SubMenu from "./SubMenu";
import {Provider} from './context';


class Menu extends AngelComponent{
    constructor(props) {
        super(props);
        this.state = {
            'openedItems': []
        };
    }

    renderChildren = (children) => {
        return (children || []).map((val, index) => {
            return val;
        });
    };


    render() {
        return (
            <Provider
                value={this}
            >
                <ul
                    className={this.className('angel-menu', {
                        'angel-menu-horizontal': this.props.mode === 'horizontal'
                    })}
                >
                    {this.renderChildren(this.props.children)}
                </ul>
            </Provider>
        );
    }
}


export default Menu;
