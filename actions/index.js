export const getPhotosAPI = () => async dispatch => {
	const result = await fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")
		.then(response => response.json())
		.then(res =>{
			res.map((item)=>item.modalVisible = false); // add state modalVisible for toggle in future usage
			return res
		});
	dispatch({
		type: 'GET_PHOTOS',
		photos: result,
	})
};

export const changeIsLoadingStatus = () => ({
	type: "CHANGE_LOADING_STATUS"
});


