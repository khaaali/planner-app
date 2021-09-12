import { v4 as uuidv4 } from "uuid";
import produce from "immer";

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

function removeItem(array, action) {
	return [...array.slice(0, action.index), ...array.slice(action.index + 1)];
}

const tripScheduleReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TRIP": {
			return produce(state, (draftState) => {
				draftState.trips.push({
					id: uuidv4(),
					tripName: action.payload.tripName,
					departDate: action.payload.departDate,
					returnDate: action.payload.returnDate,
					items: action.payload.items,
				});
			});
		}
		case "ADD_ITEMS_TO_TRIP":
			return state;

		case "REMOVE_TRIP":
			return state;
		// on action, traverses state using "immer produce" on received index and item,
		// from actio payload and filters/remove data
		case "REMOVE_ITEMS_IN_TRIP": {
			return produce(state, (draftState) => {
				draftState.trips[action.payload.tripIndex].items = [
					...state.trips[action.payload.tripIndex].items.filter(
						(item) => item.id !== action.payload.itemId
					),
				];
			});
		}

		default:
			return state;
	}
};
export default tripScheduleReducer;
