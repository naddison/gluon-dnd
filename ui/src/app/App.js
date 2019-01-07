import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Container, Menu, Sticky } from 'semantic-ui-react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    handleContextRef = contextRef => this.setState({ contextRef })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem, contextRef } = this.state;

        return (
            <div ref={this.handleContextRef}>
                <Sticky context={contextRef}>
                    <Menu borderless={true}>
                        <Menu.Item
                            name="editorials"
                            active={activeItem === 'editorials'}
                            onClick={this.handleItemClick}
                        >
                        Editorials
                        </Menu.Item>

                        <Menu.Item name="reviews" active={activeItem === 'reviews'} onClick={this.handleItemClick}>
                        Reviews
                        </Menu.Item>

                        <Menu.Item
                            name="upcomingEvents"
                            active={activeItem === 'upcomingEvents'}
                            onClick={this.handleItemClick}
                        >
                        Upcoming Events
                        </Menu.Item>
                    </Menu>
                </Sticky>
                <Paragraph>Ok</Paragraph>
            </div>
        );
    }
}

const Paragraph = styled.p`
    margin: 0;
    height: 3000px
    background-color: red;
`;

export default App;
