import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/redux/store';
import App from 'app/App';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
