import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Router from './apiRouter';

export default class UseApiMain extends Component {
    static propTypes1={
        name:PropTypes.string
    }
    render() {
        return (
            <Router />
        );
    }
}
