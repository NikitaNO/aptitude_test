import React from 'react';
import { Button, NavigatorIOS, StyleSheet, ListView, Text, View } from 'react-native';
import Item from '../components/item';

export default class ItemsContainer extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: "Items"
    });
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.navigation.state.params.data.data),
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ListView
                    onEndReached = {() => console.log('12312')}
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => <Item title={data.title} navigate={navigate} />}
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
});
