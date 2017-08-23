import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class TimerContainer extends React.Component {
    static navigationOptions = {
        title: 'Timer',
    };

    constructor() {
        super();
        this.state = {
            ms: 0,
        };
    }
    startTimer(){
        this.stopTimer();
        const start = Date.now();
        this.timer = setInterval(() => this.tick(start), 60000);
    }

    stopTimer(){
        clearInterval(this.timer);
        this.setState({ms: 0})
    }

    tick(start){
        this.setState({ms: new Date() - start});
    }

    render() {
        const eclipse = Math.round(this.state.ms / 1000);
        const minute = eclipse/60;
        const hour = Math.trunc(minute/60);
        return (
            <View style={styles.container} >
                <View style={styles.component}>
                    <Text style={styles.textBig}>Timer</Text>
                </View>
                <View style={styles.component}>
                    <View style={[styles.column, {flex: 0.5}]}>
                        <Text style={styles.timer}>{hour}</Text>
                    </View>
                    <View style={[styles.column, {flex: 0.5}]}>
                        <Text style={styles.timer}>{minute}</Text>
                    </View>
                </View>
                <View style={styles.component}>
                    <View style={styles.column}>
                        <TouchableHighlight
                            onPress={()=>{this.startTimer()}}
                        >
                            <View style={styles.button}>
                                <Text>Start</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.column}>
                        <TouchableHighlight
                            onPress={()=>{this.stopTimer()}}
                        >
                            <View style={styles.button}>
                                <Text>Stop</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    component:{
        flex: .3,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    column: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textBig: {
        fontSize: 26
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#333",
        padding: 15
    },
    timer: {
        fontSize: 26
    }
});