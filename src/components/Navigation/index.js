import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

import menuData from '../../assets/navigation.json'
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

    clickMenu = (key) => {
        console.log(key);
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
                    onClick={this.clickMenu}
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
