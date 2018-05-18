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
        if (Platform.OS === 'android') {
            // this.listener = BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this,1,2));
            // this.listener = BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid(1));
            this.listener = BackHandler.addEventListener('hardwareBackPress', () => this.onBackAndroid(2));

        }
    }

    // onBackAndroid() {
    //     this.props.navigation.goBack();
    //     return true;
    // }

    // onBackAndroid = (param) => {
    //     this.props.navigation.goBack();
    //     return true;
    // }

    onBackAndroid = (key) => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            this.listener.remove('hardwareBackPress');
        }
    }
}