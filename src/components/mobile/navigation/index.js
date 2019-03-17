import React from 'react';
import {NavBar, List} from 'antd-mobile';
import {
    Icon
} from 'antd';


import Logo from '../../../assets/logo.svg';
import MenuData from '../../../assets/navigation';

import './style.styl';

const ListItem = List.Item;

class MobileNavigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            'menus': MenuData,
            'showFlag': {},
            'showMenu': false
        };
    }

    generateList = (data = []) => {
        const menus = data || [];
        const flag = this.state.showFlag || {};
        if(menus.length) {
            return menus.map(item => {
                if(!item.children || !item.children.length) {
                    return (
                        <ListItem
                            arrow={'horizontal'}
                            onClick={() => {
                                console.log(11);
                            }}
                        >{item.text}</ListItem>
                    );
                } else if(item.children.length) {
                    return (
                        <React.Fragment>
                            <ListItem
                                extra={<Icon type={flag[item.key] ? 'minus': 'plus'} />}
                                onClick={() => {
                                    this.clickParent(item);
                                }}
                            >
                                {item.text}
                            </ListItem>
                            {
                                flag[item.key] ? (
                                    <ListItem>
                                        <ul className={'child-ul'}>
                                            {
                                                item.children.map(child => (
                                                    <li>{child.text}</li>
                                                ))
                                            }
                                        </ul>
                                    </ListItem>
                                ) : ''
                            }
                        </React.Fragment>
                    );
                }
            });
        } else {
            console.error('menu data is incorrect or empty');
            return '';
        }
    };

    clickParent = (item) => {
        const old = this.state.showFlag || {};
        old[item.key] = !old[item.key];
        this.setState({
            'showFlag': old
        });
    };

    clickNavRight = () => {
        const newFlag = !this.state.showMenu;
        this.setState({
            'showMenu': newFlag
        });
    };

    render() {
        const menus = this.state.menus;
        return (
            <div className={'navigation-content navigation-mobile'}>
                <NavBar
                    mode={"dark"}
                    leftContent={<img src={Logo}/>}
                    rightContent={
                        <Icon
                            className={'right-icon'}
                            type={this.state.showMenu ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.clickNavRight}
                        />
                    }
                />
                {
                    this.state.showMenu ? (
                        <div>
                            <List>
                                {this.generateList(menus)}
                            </List>
                        </div>
                    ) : ''
                }
            </div>
        );
    }
}

export default MobileNavigation;