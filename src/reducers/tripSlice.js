import { v4 as uuidv4 } from "uuid";

const initialState = {
	trips: [
		{
			id: uuidv4(),
			departDate: "20/9/2021",
			items: [
				{
					id: uuidv4(),
					name: "hair dyer",
				},
				{
					id: uuidv4(),
					name: "cell charger",
				},
			],
			returnDate: "12/10/2021",
			tripName: "Sudan",
		},
		{
			id: uuidv4(),
			departDate: "22/9/2021",
			items: [
				{
					id: uuidv4(),
					name: "hair dyer",
				},
				{
					id: uuidv4(),
					name: "cell charger",
				},
			],
			returnDate: "11/10/2021",
			tripName: "Spain",
		},
		{
			id: uuidv4(),
			departDate: "21/9/2021",
			items: [
				{
					id: uuidv4(),
					name: "hair dyer",
				},
				{
					id: uuidv4(),
					name: "cell charger",
				},
			],
			returnDate: "10/10/2021",
			tripName: "Thailand",
		},
	],
};

const tripScheduleReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TRIP": {
			return {
				...state,
				trips: [
					...state.trips,
					{
						id: uuidv4(),
						tripName: action.payload.tripName,
						departDate: action.payload.departDate,
						returnDate: action.payload.returnDate,
						items: action.payload.items,
					},
				],
			};
		}
		case "ADD_ITEMS_TO_TRIP":
			return state;

		case "REMOVE_TRIP":
			return state;
		case "REMOVE_ITEMS_IN_TRIP": {
			var filteredItems = state.trips[action.payload.index];
			console.log(action.payload.index);
			console.log(filteredItems);
			return {
				...state,
				trips: state.trips.filter((el) =>
					el.items.some((item) => item.id !== action.payload.id)
				),
			};
		}

		default:
			return state;
	}
};
export default tripScheduleReducer;
