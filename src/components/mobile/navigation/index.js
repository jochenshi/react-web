import React from 'react';
import AngelComponent from '../../../components/Component/component';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'


import Logo from '../../../assets/logo.svg';
import MenuData from '../../../assets/navigation';

import './style.styl';

class MobileNavigation extends AngelComponent{
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
                        <li
                            onClick={() => {
                                this.setState({
                                    'showMenu': false
                                });
                                this.props.history.push(item.page);
                            }}
                        >
                            {item.text}
                        </li>
                    );
                } else if(item.children.length) {
                    return (
                        <React.Fragment>
                            <li>
                                {item.text}
                            </li>
                            {
                                flag[item.key] ? (
                                    <ul className={'child-ul'}>
                                        {
                                            item.children.map(child => (
                                                <li>
                                                    <Link to={child.page}>{child.text}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
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
                <div className={'mobile-nav'}>
                    <div className={'left'}>
                        <img src={Logo}/>
                    </div>
                    <div className={'content'}></div>
                    <div className={'right'}>
                        <span
                            className={this.className(
                                'iconfont',
                                this.state.showMenu ? 'angel-indent' : 'angel-outdent'
                            )}
                            onClick={this.clickNavRight}
                        />
                    </div>
                </div>
                {
                    this.state.showMenu ? (
                        <div>
                            <ul className={'mobile-menu'}>
                                {this.generateList(menus)}
                            </ul>
                        </div>
                    ) : ''
                }
            </div>
        );
    }
}

export default withRouter(MobileNavigation);
