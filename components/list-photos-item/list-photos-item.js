import React, {Component} from 'react';
import {
	
	StyleSheet,
	TouchableOpacity,
	TouchableHighlight,
	Text,
	Image,
	View, Modal
} from 'react-native';

class ListPhotosItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			photo: this.props.data,
			showModal: false
		};
	}
	
	setModalVisible() {
		this.setState(({showModal})=>({showModal: !showModal}));
		console.log("setModalVisible");
	}
	
	render() {
		const { photo, showModal } = this.state;
		return (
			<View>
				<Modal
					animationType="slide"
					transparent={false}
					visible={showModal}
					>
					<View>
						<Text>Hello World!</Text>
	
						<Image
							style={styles.modalImage}
							source={{uri: photo.urls.small}}
						
						/>
						<TouchableOpacity
							style={styles.closeButton}
							onPress={() => this.setModalVisible()}
							>
							<Text>Close</Text>
						</TouchableOpacity>
					</View>
				</Modal>
				
				<TouchableHighlight
					onPress={() => {
						this.setModalVisible();
					}}>
					
					<View style={styles.imageItem}>
						<Image
							style={{
								height: 300,
								width: "100%",
								flex: 1
							}}
							source={{uri: photo.urls.small}}
						
						/>
						<Text style={styles.capture}>{ `Author: ${photo.user.first_name} ${photo.user.last_name}`}</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingRight: 25,
		paddingLeft: 25,
		flex: 1,
		justifyContent: "center"
	},
	capture: {
		padding: 5
	},
	imageItem: {
		shadowOpacity: 0.95,
		shadowRadius: 5,
		shadowColor: 'black',
		shadowOffset: { height: 0, width: 0 },
	},
	modalImage:{
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		height: 300,
		width: "100%",
		flex: 1
	},
	closeButton:{
		marginRight:40,
		marginLeft:"auto",
		marginTop:10,
		padding:10,
		backgroundColor:'rgba(214,214,214,0.7)',
		borderRadius:5,
		borderWidth: 1,
		borderColor: '#fff',
		width: 60,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});


export default ListPhotosItem;