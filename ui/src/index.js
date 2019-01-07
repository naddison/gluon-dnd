import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './app/store/configureStore';
import App from 'app/App';
import Provider from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
