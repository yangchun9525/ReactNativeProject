import {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    Platform,
    ToastAndroid,
    BackHandler
} from 'react-native';

export default class BaseView extends Component {


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("detail-componentWillMount")
        if (Platform.OS === 'android') {
            this.listener = BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    // onBackAndroid() {
    //     prop.navigation.goBack();
    //     return true;
    // }

    componentWillUnmount() {
        console.log("detail-componentWillUnmount")
        if (Platform.OS === 'android') {
            this.listener.remove('hardwareBackPress');
        }
    }
}