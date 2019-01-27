import React from 'react';
import NavBar from './NavBar';
import { Sticky } from 'semantic-ui-react';
import Container from './Container';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuSelection: {}
        };
    }

    handleContextRef = contextRef => {
        this.setState({ contextRef });
    }

    render() {
        const { contextRef, menuSelection } = this.props;

        return (
            <div ref={this.handleContextRef}>
                <Sticky context={contextRef}>
                    <NavBar />
                </Sticky>
                <Container menuSelection={menuSelection} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        menuSelection: state.menu.menuSelection
    };
};

export default connect(mapStateToProps)(App);
