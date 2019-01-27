import React from 'react';
import BattlePage from './BattlePage';
import MonsterTable from './MonsterTable';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuSelection: props.menuSelection
        };
    }

    render() {
        const { menuSelection } = this.state;

        switch (menuSelection) {
        case 'monster_table':
            return (
                <MonsterTable />
            );

        case 'battle_page':
            return (
                <BattlePage />
            );
        default:
            return null;
        }
    }
}
