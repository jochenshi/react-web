import React from 'react';
import AngelComponent from '../../../components/Component/component';

import './style.styl';

class AngelSelect extends AngelComponent{
    constructor(props) {
        super(props);
        this.state = {
            'active': false,
            'selected': []
        };
    }

    generateSelection = (selection) => {
        const {
            active
        } = this.state;
        if(selection.length) {
            return (
                <div
                    className={'angel-selection-content'}
                    hidden={!active}
                >
                    {selection}
                </div>
            );
        } else {
            return (
                <div
                    className={'angel-selection-content'}
                    hidden={!active}
                >
                    暂无数据
                </div>
            );
        }
    };

    generateHeader = () => {
        const {
            placeholder = '请选择',
            mode = 'common'
        } = this.props;
        return (
            <div
                className={'angel-select-top'}
                onClick={() => {
                    this.setState({
                        'active': !this.state.active
                    });
                }}
            >
                {placeholder}
            </div>
        );
    };

    render() {
        return (
            <div
                className={'angel-select'}
                tabIndex={1}
                onBlur={() => {
                    console.log('blur');
                    this.setState({
                        'active': false
                    });
                }}
            >
                {this.generateHeader()}
                {this.generateSelection(this.props.children)}
            </div>
        );
    }
}

export default AngelSelect;
