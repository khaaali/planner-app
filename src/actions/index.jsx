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

const apiLoadItems = (data) => {
	return {
		type: "API_LOAD_ITEMS_INVENTORY",
		payload: data,
	};
};

const apiAddItems = (data) => {
	return {
		type: "API_ADD_ITEMS_INVENTORY",
		payload: data,
	};
};

const apiDeleteItems = (data) => {
	return {
		type: "API_DELETE_ITEMS_INVENTORY",
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
	apiLoadItems,
	apiAddItems,
	apiDeleteItems,
};
