import React from 'react';
import Menu from '../../components/Menu/index';

const {
    Item, SubMenu
} = Menu;

class AboutPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>menu test</span>
                <Menu>
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

export default AboutPage;
