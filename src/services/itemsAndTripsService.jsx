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

const deleteItemHandler = async (item) => {
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
	return response.data;
};

export {
	getAllTripsHandler,
	getAllItemsHandler,
	postItemHandler,
	deleteItemHandler,
};
