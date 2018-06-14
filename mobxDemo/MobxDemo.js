import React from 'react';
import {Button, Text, View} from 'react-native';
import {observer} from 'mobx-react'
import AppState from './AppState'
import {action, computed, configure, observable,autorun} from "mobx";
// import {extendObservable} from "mobx";
//
@observer
class App extends React.Component {
    constructor(props){
        super(props);
        // autorun(() => {
        //     console.log(AppState.timer)
        // })
    };

    render() {
        return (
            <View>
                <Text>当前的timer是:{AppState.timer}</Text>
                <Text>当前的timer2是:{AppState.timer2}</Text>
                <Text>总数是:{AppState.total}</Text>
                <Button
                    onPress={() =>
                        AppState.addTimers()}
                    title='time1 add'
                />
                <Button
                    onPress={() =>
                        AppState.resetTimer()
                    }
                    title='time1 reset'
                />

                <Button
                    onPress={() =>
                        AppState.addTimers2()}
                    title='time2 add'
                />
                <Button
                    onPress={() =>
                        AppState.resetTimer2()
                    }
                    title='time2 reset'
                />
            </View>
        );
    }
}

export default App;
