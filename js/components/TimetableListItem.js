import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import RailsView from './RailsView';
import moment from 'moment';

export default class TimetableListItem extends Component {

    constructor(props) {
        super(props);
    }

    _renderDate(date, wra) {
        let formattedDate = moment(date + wra, 'YYYYMMDDHH.mm').format('DD MMM HH:mm');
        return (
            <Text style={styles.arrivalDate}>
                {formattedDate}
            </Text>
        )
    }

    render() {
        const segment = this.props.sheduleData.segments[0];
        const duration = this.props.sheduleData.ttt;
        return (
            <View style={styles.container}>
                <View style={styles.rowView}>
                    <Text style={styles.departure}>
                        {segment.apo}
                    </Text>
                    <View style={styles.railsContainer}>
                        <RailsView />
                        <Text style={styles.duration}>
                            {'(' + duration + ')'}
                        </Text>
                    </View>
                    <Text style={styles.arrival}>
                        {segment.ews}
                    </Text>
                </View>

                <View style={styles.rowView}>
                    {this._renderDate(segment.date1, segment.wra1)}
                    <View style={{ flex: 1 }} />
                    {this._renderDate(segment.date2, segment.wra2)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#efefef',
        padding: 5,
        paddingLeft: 12,
        paddingRight: 12,
        margin: 1
    },
    rowView: {
        flex: 1,
        flexDirection: 'row'
    },
    departure: {
        margin: 5,
        fontSize: 16,
        textAlign: 'left',
    },
    arrival: {
        margin: 5,
        fontSize: 16,
        textAlign: 'right',
    },
    dateContainer: {
        flexDirection: 'row'
    },
    departureDate: {
        margin: 5,
        fontSize: 12,
        textAlign: 'left',
    },
    arrivalDate: {
        margin: 5,
        fontSize: 12,
        textAlign: 'right',
    },
    railsContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    duration: {
        flex: 1,
        textAlign: 'center'
    }
})
