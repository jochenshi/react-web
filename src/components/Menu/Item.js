import React from 'react';

class MenuItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}

export default MenuItem;