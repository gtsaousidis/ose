/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	ActivityIndicator,
	Alert
} from 'react-native';
import TimetableListItem from './components/TimetableListItem';
import network from './network';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			isRefreshing: false
		};
	}

	componentDidMount() {
		this._loadData();
	}

	_loadData = () => {
		network.getTrainShedules()
			.then((result) => {
				this.setState({
					isLoading: false,
					isRefreshing: false,
					sheduleData: result
				});
			}).catch((error) => {
				this.setState({
					isLoading: false,
					isRefreshing: false
				})
				Alert.alert(error.message);
			});
	}

	_refreshData = () => {
		this.setState({
			isLoading: false,
			isRefreshing: true
		});
		this._loadData();
	}

	_keyExtractor = (item, index) => {
		const segment = item.segments[0];
		return segment.apo + segment.wra1 + segment.date1;
	}

	_renderItem = ({ item }) => {
		return <TimetableListItem sheduleData={item} />
	}

	render() {
		if (this.state.isLoading) {
			return (
				<View style={styles.indicatorContainer}>
					<ActivityIndicator size='large' color='#F1C02C' />
				</View>
			);
		}
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image style={styles.logo} source={require('../images/ose.png')} />
					<Text style={styles.headerTitle}>
						Δρομολόγια απο Αθήνα προς Λάρισα
                    </Text>
				</View>
				<FlatList
					data={this.state.sheduleData}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
					refreshing={this.state.isRefreshing}
					onRefresh={this._refreshData}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		backgroundColor: '#F5FCFF',
		paddingTop:Platform.OS === 'ios' ? 20 : 0,
	},
	header: {
		flexDirection: 'row',
		backgroundColor: '#F1C02C',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 40,
		height: 30,
		marginLeft: 12,
		resizeMode: 'contain'
	},
	indicatorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerTitle: {
		fontSize: 15,
		textAlign: 'left',
		padding: 10,
		flex: 1
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
