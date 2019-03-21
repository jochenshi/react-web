import React, {Component} from 'react';

class Menu extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul
                className={'menu-content'}
            >
                {this.props.children}
            </ul>
        );
    }
}

export default Menu;