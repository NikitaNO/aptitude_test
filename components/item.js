import React from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default class Group extends React.Component {
    render() {
        return(
            <TouchableHighlight onPress={()=>this.props.navigate('TimerContainer', { timer: 0 })}>
                <View style={styles.component}>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    component:{
        flex:1,
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
    }
});