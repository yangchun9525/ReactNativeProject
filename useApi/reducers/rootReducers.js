'use strict';

import {combineReducers} from 'redux';
import mainProduct from './mainProductReducer';

const rootReducer = combineReducers({
    mainProd: mainProduct,
});

export default rootReducer;
