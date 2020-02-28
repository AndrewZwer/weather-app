const initialState = {
	savedCities: []
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case "SAVED_CITIES":
			return {
				savedCities: action.payload
			}
		default:
			return state;
	}
	return state;
}

export default reducer;