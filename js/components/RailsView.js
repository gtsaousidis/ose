import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class RailsView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circleView} />
                <View style={styles.rectangleView} />
                <View style={styles.circleView} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 2
    },
    circleView: {
        width: 15,
        height: 15,
        borderRadius: 100 / 2,
        backgroundColor: '#F1C02C'
    },
    rectangleView: {
        width: 50,
        height: 4,
        flex: 1,
        backgroundColor: '#F1C02C'
    }
})