import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import LoginPage from './LoginPage';
const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <LoginPage/>
            </Provider>
        )
    }
}
