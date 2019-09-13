const reducer = (state = [], action) => {
	switch (action.type) {
		case "GET_PHOTOS":
			return Object.assign({}, state, {photos: action.photos});
			
		case "CHANGE_LOADING_STATUS":
			const {isLoading} = state;
			return Object.assign({}, state, {isLoading: !isLoading});
	
		default:
			return state;
	}
	
}
export default reducer;