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

const stateLoadItems = (data) => {
	return {
		type: "STATE_LOAD_ITEMS_INVENTORY",
		payload: data,
	};
};

const stateAddItem = (data) => {
	return {
		type: "STATE_ADD_ITEM_INVENTORY",
		payload: data,
	};
};

const stateRemoveItem = (data) => {
	return {
		type: "STATE_REMOVE_ITEM_INVENTORY",
		payload: data,
	};
};

const stateLoadTrips = (data) => {
	return {
		type: "STATE_LOAD_TRIPS_PLANNER",
		payload: data,
	};
};

const stateAddTrip = (data) => {
	return {
		type: "STATE_ADD_TRIP_PLANNER",
		payload: data,
	};
};

const stateRemoveTrip = (data) => {
	return {
		type: "STATE_REMOVE_TRIP_PLANNER",
		payload: data,
	};
};

const stateAddItemsToTrip = (data) => {
	return {
		type: "STATE_ADD_ITEMS_TO_TRIP_PLANNER",
		payload: data,
	};
};

const stateRemoveItemFromTrip = (data) => {
	return {
		type: "STATE_REMOVE_ITEMS_IN_TRIP_PLANNER",
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
	stateLoadItems,
	stateAddItem,
	stateRemoveItem,
	stateLoadTrips,
	stateAddTrip,
	stateRemoveTrip,
	stateAddItemsToTrip,
	stateRemoveItemFromTrip,
};
