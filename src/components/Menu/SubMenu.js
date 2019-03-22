import React from 'react';
import Component from '../Component/component';

class SubMenu extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li
                className={this.className('angel-submenu')}
                style={this.getStyle()}
            >
                <div
                    className={this.className('angel-submenu-title')}
                >
                    {this.props.title}
                </div>
                <ul
                    className={'angel-menu'}
                >
                    {this.props.children}
                </ul>
            </li>
        );
    }
}

export default SubMenu;
