const addItem = (data) => {
	return {
		type: "ADD_ITEM",
		payload: data,
	};
};

const addTrip = (data) => {
	return {
		type: "ADD_TRIP",
		payload: data,
	};
};

const addItemsToTrip = (data) => {
	return {
		type: "ADD_ITEMS_TO_TRIP",
		payload: data,
	};
};

const removeItemsInTrip = (data) => {
	return {
		type: "REMOVE_ITEMS_IN_TRIP",
		payload: data,
	};
};

const removeItem = (data) => {
	return {
		type: "REMOVE_ITEM",
		payload: data,
	};
};

const removeTrip = (data) => {
	return {
		type: "REMOVE_TRIP",
		payload: data,
	};
};

const switchTab = (data) => {
	return {
		type: "TAB_SWITCH",
		payload: data,
	};
};

export {
	addItem,
	addTrip,
	addItemsToTrip,
	removeItemsInTrip,
	removeItem,
	removeTrip,
	switchTab,
};
