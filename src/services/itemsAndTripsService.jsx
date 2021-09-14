import axios from "axios";

const API_URL = "http://localhost:3000";

const getAllItemsHandler = async () => {
	const response = await axios.get(`${API_URL}/items`).catch((error) => {
		console.log(error);
	});
	return response.data;
};

const postItemHandler = async (item) => {
	const response = await axios
		.post(`${API_URL}/items`, { id: item.id, name: item.name })
		.catch((error) => {
			console.log(error);
		});
	return response.data;
};

const removeItemHandler = async (item) => {
	const response = await axios
		.delete(`${API_URL}/items/${item.id}`)
		.catch((error) => {
			console.log(error);
		});
	return response.data;
};

const getAllTripsHandler = async () => {
	const response = await axios.get(`${API_URL}/trips`).catch((error) => {
		console.log(error);
	});
	console.log(response.data);
	return response.data;
};

const postTripHandler = async (trip) => {
	console.log("post", trip);
	const response = await axios.post(`${API_URL}/trips`, trip).catch((error) => {
		console.log(error);
	});
	return response.data;
};

const removeTripHandler = async (tripID) => {
	const response = await axios
		.delete(`${API_URL}/trips/${tripID}`)
		.catch((error) => {
			console.log(error);
		});
	return response.data;
};

// add items to the trip uses PUT to modifiy the nested data of trips
const putItemToTripHandler = async (data) => {
	// prepare trip data with items and send put request
	let put_data = {
		id: data.trip.id,
		tripName: data.trip.tripName,
		departDate: data.trip.departDate,
		returnDate: data.trip.returnDate,
		items: [...data.trip.items, data.item],
	};
	//console.log("putdata", put_data);
	const response = await axios
		.put(`${API_URL}/trips/${data.trip.id}`, put_data)
		.catch((error) => {
			console.log(error);
		});
	return response.data;
};

// remove items from trip uses PUT to modify the nested data of trips
const removeItemInTripHandler = async (data) => {
	console.log("data", data);
	// get filter elements by id
	console.log();
	let put_data = {
		id: data.trip.id,
		tripName: data.trip.tripName,
		departDate: data.trip.departDate,
		returnDate: data.trip.returnDate,
		items: [data.trip.items.filter((el) => el.id !== data.itemId)],
	};

	const response = await axios
		.put(`${API_URL}/trips/${data.trip.id}`, put_data)
		.catch((error) => {
			console.log(error);
		});
	return response.data;
};

export {
	getAllItemsHandler,
	postItemHandler,
	removeItemHandler,
	getAllTripsHandler,
	postTripHandler,
	removeTripHandler,
	putItemToTripHandler,
	removeItemInTripHandler,
};
