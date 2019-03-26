import React from 'react';
import classes from 'classnames';

class AngelComponent extends React.Component{
    classNames = (...args) => {
        return classes(args);
    };

    className = (...args) => {
        const {className} = this.props;
        return this.classNames(args.concat([className]))
    };

    getStyle = (args) => {
        const {style} = this.props;
        return Object.assign({}, args, style)
    };
}

export default AngelComponent;
