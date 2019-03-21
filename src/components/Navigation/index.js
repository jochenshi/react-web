import React from 'react';
// import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import {Menu} from '../index';

import menuData from '../../assets/navigation.json'
import Logo from '../../assets/logo.svg';

import './style.styl';

const {
    Item
} = Menu;

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        console.log(menuData);
    }

    generateMenus = (data) => {
        const menus = data || [];
        if(menus.length) {
            return menus.map(item => {
                if(!item.children || !item.children.length) {
                    return (
                        <Item key={item.key}>
                            <Link to={item.page}>{item.text}</Link>
                        </Item>
                    );
                } else if(item.children.length) {
                    return (
                        <SubMenu
                            key={item.key}
                            title={item.text}
                        >
                            {
                                this.generateMenu(item.children)
                            }
                        </SubMenu>
                    );
                }
            });
        } else {
            console.error('menu data is empty');
            return '';
        }
    };

    generateMenu = (data) => {
        const menus = data || [];
        if(menus.length) {
            return menus.map(item => {
                if(!item.children || !item.children.length) {
                    return (
                        <Item key={item.key}>
                            <Link to={item.page}>{item.text}</Link>
                        </Item>
                    );
                } else if(item.children.length) {
                    return '';
                }
            });
        } else {
            console.error('menu data is empty');
            return '';
        }
    };

    render() {
        const {
            mode = 'horizontal'
        } = this.props;
        return (
            <div className='navigation-content navigation-web'>
                <div className="logo">
                    <img src={Logo}/>
                </div>
                <Menu
                    mode={mode}
                    style={{'lineHeight': '64px'}}
                >
                    {
                        this.generateMenu(menuData)
                    }
                </Menu>
            </div>
        );
    }
}

export default Navigation;