import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    margin: 0;
    height: 3000px
    background-color: red;
`;

export default class BattlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Paragraph>I am a battle page!</Paragraph>
        );
    }
}
