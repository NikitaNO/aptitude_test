import React from 'react';
import {
    Text,
    Button,
    View,
    FlatList,
    ListView,
    StyleSheet
} from 'react-native';
import Group from '../components/group'
import data from '../data/data.json'
import SvgUri from 'react-native-svg-uri';



export default class GroupsContainer extends React.Component {
    static navigationOptions = {
        title: 'Groups',
    };
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Main Title</Text>
                <View style={styles.logo}>
                    <SvgUri
                        width="250"
                        height="250"
                        source={require('../images/icon.svg')}
                    />
                </View>

                <ListView
                    onEndReached = {() => console.log('12312')}
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => <Group title={data.title} navigate={navigate} data={data}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    header: {
        textAlign: "center",
        fontSize: 26
    },
    logo:{
        alignItems: 'center'
    }
});