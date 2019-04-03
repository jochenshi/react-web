import React from 'react';
import AngelComponent from '../../../components/Component/component';

class AngelOption extends AngelComponent{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default AngelOption;
