import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    handleContextRef = contextRef => {
        this.setState({ contextRef });
    }
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu borderless={true}>
                <Menu.Item
                    name="monster_entry"
                    active={activeItem === 'monster_entry'}
                    onClick={this.handleItemClick}
                >
                Monster Entry
                </Menu.Item>

                <Menu.Item
                    name="start_battle"
                    active={activeItem === 'start_battle'}
                    onClick={this.handleItemClick}
                >
                Start Battle
                </Menu.Item>
            </Menu>
        );
    }
}
