import React from 'react';
import AngelComponent from '../../../components/Component/component';
import {Consumer} from './context';

class AngelOption extends AngelComponent{
    constructor(props) {
        super(props);
    }

    handleOptionClick = (context) => {
        const props = this.props;
        console.log('co', context);
        if(props.selectable) {
            let selectedKeys = context.state.selectedKeys || [];
            if(props.mode === 'multiple') {
               selectedKeys = selectedKeys.concat(props.value);
            } else {
                selectedKeys = [props.value];
            }
            context.setState({
                'selectedKeys': selectedKeys
            });
            props.onClick({
                ...context, selectedKeys
            });
        }
    };

    render() {
        const selectedItems = this.props.selectedKeys || [];
        console.log(selectedItems);
        return (
            <Consumer>
                {
                    (con) => {
                        return (
                            <div
                                className={this.className('angel-select-option', {
                                    'angel-selected-option-active': selectedItems.includes(this.props.value)
                                })}
                                onClick={() => {
                                    this.handleOptionClick(con);
                                }}
                            >
                                {this.props.children}
                            </div>
                        );
                    }
                }
            </Consumer>
        );
    }
}

export default AngelOption;
