export const addItem = (data) => {
	return {
		type: "ADD_ITEM",
		payload: data,
	};
};

export const addTrip = (data) => {
	return {
		type: "ADD_TRIP",
		payload: data,
	};
};

export const addItemsToTrip = (data) => {
	return {
		type: "ADD_ITEMS_TO_TRIP",
		payload: data,
	};
};

export const removeItemsInTrip = (data) => {
	return {
		type: "REMOVE_ITEMS_IN_TRIP",
		payload: data,
	};
};

export const removeItem = (data) => {
	return {
		type: "REMOVE_ITEM",
		payload: data,
	};
};

export const removeTrip = (data) => {
	return {
		type: "REMOVE_TRIP",
		payload: data,
	};
};

export const switchTab = (data) => {
	return {
		type: "TAB_SWITCH",
		payload: data,
	};
};
