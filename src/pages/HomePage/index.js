import React from 'react';

import './style.styl';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.test = new Array(100);
    }

    generateRow = () => {
        const arr = [];
        for(let i = 0; i < 100; i++) {
            arr.push((
            <div className="row" key={i}>
                <div className="col">asdasd1</div>
                <div className="col">asdasd2</div>
                <div className="col">asdasd3</div>
                <div className="col">asdasd4</div>
                <div className="col">asdasd5</div>
                <div className="col">asdasd6</div>
                <div className="col">asdasd7</div>
                <div className="col">asdasd8</div>
                <div className="col">asdasd9</div>
                <div className="col">asdasd10</div>
                <div className="col">asdasd11</div>
                <div className="col">asdasd12</div>
                <div className="col">asdasd13</div>
                <div className="col">asdasd14</div>
            </div>
        ))
        }
        return arr;
    };

    render() {
        return (
            <div>
                <div className="table-content">
                    <div className="header row">
                        <div className="col">asdasd1</div>
                        <div className="col">asdasd2</div>
                        <div className="col">asdasd3</div>
                        <div className="col">asdasd4</div>
                        <div className="col">asdasd5</div>
                        <div className="col">asdasd6</div>
                        <div className="col">asdasd7</div>
                        <div className="col">asdasd8</div>
                        <div className="col">asdasd9</div>
                        <div className="col">asdasd10</div>
                        <div className="col">asdasd11</div>
                        <div className="col">asdasd12</div>
                        <div className="col">asdasd13</div>
                        <div className="col">asdasd14</div>
                    </div>
                    <div className="content">
                        {
                            this.generateRow()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;