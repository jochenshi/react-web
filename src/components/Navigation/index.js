import React from 'react';
import {Menu} from 'antd';

import menuData from './navigation.json'
import Logo from '../../assets/logo.svg';

import './style.styl';

const {
    SubMenu, Item
} = Menu;

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        console.log(menuData);
    }

    generateMenu = (data) => {
        const menus = data || [];
        if(menus.length) {
            return menus.map(item => {
                if(!item.children || !item.children.length) {
                    return (
                        <Item key={item.key}>{item.text}</Item>
                    );
                } else if(item.children && item.children.length) {
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
    }

    render() {
        const {
            mode = 'horizontal'
        } = this.props;
        return (
            <div className='navigation-content'>
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