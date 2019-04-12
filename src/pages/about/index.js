import React from 'react';
import Menu from '../../components/Menu/index';
import AngelSelect from '../../common/component/select/index';
import TestPage from '../test';

const {
    Item, SubMenu
} = Menu;

const {
    AngelOption
} = AngelSelect;

class AboutPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>menu test</span>
                <Menu
                    mode={'vertical'}
                >
                    <Item>parent1</Item>
                    <SubMenu
                        title={'parent1'}
                    >
                        <Item>child1</Item>
                        <Item>child2</Item>
                        <Item>child3</Item>
                    </SubMenu>
                    <Item>parent3</Item>
                </Menu>
            </div>
        )
    }
}

class About extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AngelSelect>
                    {[{'text': 'first', 'value': '1'},{'text': 'second', 'value': '2'}].map((item, index) => (
                        <AngelOption
                            key={index}
                            value={index}
                        >
                            {item.text}
                        </AngelOption>
                    ))}
                </AngelSelect>
                <TestPage initialState={{count: 0}}/>
            </div>
        );
    }
}

export default About;
