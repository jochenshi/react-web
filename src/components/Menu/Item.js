import React from 'react';


class MenuItem extends React.Component{
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log('this', this);
    };

    render() {
        return (
            <li
                className={'angel-menu-item'}
                onClick={this.handleClick}
            >
                {this.props.children}
            </li>
        );
    }
}

export default MenuItem;
