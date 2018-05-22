import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Router from './apiRouter';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import Login from './login.js';
import MainProduct from './mainProduct.js';
const store = configureStore();

export default class UseApiMain extends Component {
    static propTypes1={
        name:PropTypes.string
    }
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>

        );
    }
}
