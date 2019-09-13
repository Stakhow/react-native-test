import React, { Component } from 'react';
import {
	StyleSheet,
	FlatList,
	TouchableHighlight,
	Text,
	Image,
	ActivityIndicator,
	View, Modal, Alert
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../actions/index';
import ListPhotosItem from "../list-photos-item/list-photos-item";


class ListPhotos extends Component {


	componentDidMount() {
		console.log("componentDidMount");
		this.props.getPhotosAPI();
	}

	componentWillMount() {
		this.props.changeIsLoadingStatus();
		console.log("componentWillUpdate");
	}
	
	
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.photos !== this.props.photos
	}
	
	render(){
		const { photos, isLoading }  = this.props;
		console.log("isLoading", isLoading);
		if(isLoading) {
			return (
				<View>
					<ActivityIndicator size="large" color="rgba(0,0,0,0.5)" />
				</View>
				)
		}

		const PhotosList = photos.map((photo,idx)=> {
			return (
				<View key={idx} style={styles.container}>
					<ListPhotosItem data={photo}/>
				</View>
			)
		});
		return (
			<View>
				{PhotosList}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingRight: 25,
		paddingLeft: 25,
		flex: 1,
		justifyContent: "center"
	},
	indicator: {
		color: "#00ff00"
	}
});


const mapStateToProps = (state) => {
	return {
		photos: state.photos,
		isLoading: state.isLoading
	}
};
const mapDispatchToProps = (dispatch) => {
	const { getPhotosAPI, changeIsLoadingStatus } = bindActionCreators(actions, dispatch);
	
	return {
		getPhotosAPI: () => {
			getPhotosAPI();
		},
		changeIsLoadingStatus: () => {
			changeIsLoadingStatus();
		}
	}
};



export default connect(mapStateToProps, mapDispatchToProps)(ListPhotos);