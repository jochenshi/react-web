import React from 'react';
import AngelComponent from '../../../components/Component/component';
import {Provider} from './context';

import './style.styl';

class AngelSelect extends AngelComponent{
    constructor(props) {
        super(props);
        this.state = {
            'active': false,
            'selectedKeys': [], // 选中的key, 存在value时取value,不存在value时取key
            'selectWidth': 'auto'
        };
    }

    componentDidMount() {
        this.setState({
            'selectWidth': this.select.clientWidth
        });
    }

    generateSelection = (selection) => {
        const {
            active, selectWidth, selectedKeys
        } = this.state;
        const {
            mode = 'common',
            onOptionSelect,
            onOptionDeselect
        } = this.props;
        const style = {
            'width':selectWidth
        };
        const optionProps = {
            'selectedKeys': selectedKeys
        };
        if(mode === 'common') {
            optionProps.onClick = () => {};
        } else if(mode === 'multiple') {
            optionProps.onDeselect = onOptionDeselect;
            optionProps.onSelect = onOptionSelect;
        }
        if(selection.length) {
            return (
                <div
                    className={'angel-selection-content'}
                    hidden={!active}
                    style={style}
                >
                    {selection.map((item, index) => {
                        return React.cloneElement(item, Object.assign({}, optionProps, {
                            'selectable': !item.disabled
                        }))
                    })}
                </div>
            );
        } else {
            return (
                <div
                    className={'angel-selection-content'}
                    hidden={!active}
                    style={style}
                >
                    暂无数据
                </div>
            );
        }
    };

    generateHeader = () => {
        const {
            placeholder = '请选择',
            mode = 'common',
            disabled
        } = this.props;
        const {
            selectedKeys
        } = this.state;
        const arr = [];
        if(selectedKeys.length) {
            const childrenItem = this.props.children;
            if(mode === 'multiple') {
                childrenItem.forEach(child => {
                    if(selectedKeys.includes(child.props.value)) {
                        arr.push(child.props.children);
                    }
                });
            } else {
                for(let i = 0; i < childrenItem.length; i++) {
                    if(selectedKeys.includes(childrenItem[i].props.value)) {
                        arr.push(childrenItem[i].props.children);
                        break;
                    }
                }
            }
        }
        return (
            <div
                className={'angel-select-top'}
                onClick={() => {
                    if(!disabled) {
                        this.setState({
                            'active': !this.state.active
                        });
                    }
                }}
            >
                {arr.length ? arr.join() : placeholder}
                <span className={'select-icon'}>
                    <i className={this.className('iconfont', 'angel-down')}></i>
                </span>
            </div>
        );
    };

    render() {
        return (
            <Provider value={this}>
                <div
                    ref={e => {
                        this.select = e;
                    }}
                    className={this.className('angel-select', {
                        'angel-select-open': this.state.active
                    })}
                    tabIndex={1}
                    onBlur={() => {
                        console.log(this.props);
                        this.setState({
                            'active': false
                        });
                    }}
                >
                    {this.generateHeader()}
                    {this.generateSelection(this.props.children)}
                </div>
            </Provider>
        );
    }
}

export default AngelSelect;
