import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import Routers from './Routers';

export default class NavigatorTest extends Component {
  static propTypes1={
    name:PropTypes.string
  }
  render() {
    return (
        <Routers />
    );
  }
}
