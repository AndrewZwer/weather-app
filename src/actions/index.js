const savedCities = () => {
	return {
		type: "SAVED_CITIES",
		payload: newCities
	}
}

export {
	savedCities
}