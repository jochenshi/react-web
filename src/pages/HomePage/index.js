import React from 'react';

import './style.styl';
import Pic1 from '../../assets/pic1.svg';
import Pic2 from '../../assets/pic2.svg';
import Pic3 from '../../assets/pic3.svg';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.test = new Array(100);
    }

    render() {
        return (
            <React.Fragment>
                <div id={'hero'}>
                    <div className={'content'}>
                        <p className={'text'}>
                            Helping our customers<br/>
                            to provide faster and more reliable<br/>
                            software products<br/>
                        </p>
                    </div>
                </div>
                <div id={'body'}>
                    <div className={'case-display'}>
                        <p className={'label'}>我们的案例</p>
                        <div className={'card-content'}>
                            <div className={'single-card'}>
                                <img src={Pic1}/>
                                <span>This is information display area</span>
                                <p>查看更多</p>
                            </div>
                            <div className={'single-card'}>
                                <img src={Pic2}/>
                                <span>This is information display area</span>
                                <p>查看更多</p>
                            </div>
                            <div className={'single-card'}>
                                <img src={Pic3}/>
                                <span>This is information display area</span>
                                <p>查看更多</p>
                            </div>
                        </div>
                    </div>
                    <div className={'case-display'}>
                        <p className={'label'}>经营范围</p>
                        <div className={'card-content'}>
                            <div className={'single-card'}>
                                <img src={Pic1}/>
                                <span>This is information display area</span>
                                <p>查看更多</p>
                            </div>
                            <div className={'single-card'}>
                                <img src={Pic2}/>
                                <span>This is information display area</span>
                                <p>查看更多</p>
                            </div>
                            <div className={'single-card'}>
                                <img src={Pic3}/>
                                <span>This is information display area</span>
                                <p>查看更多</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;