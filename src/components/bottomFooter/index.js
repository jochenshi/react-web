import React from 'react';

import './style.styl';

class FooterArea extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'foot-area'}>
                <span>©2015-2019 Aiviy Inc. All rights reserved. xxxxx</span>
            </div>
        );
    }
}

export default FooterArea;