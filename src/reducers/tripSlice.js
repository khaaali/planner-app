import { v4 as uuidv4 } from "uuid";
import produce from "immer";

const initialState = {
	trips: [
		{
			id: uuidv4(),
			departDate: "20/9/2021",
			items: [],
			returnDate: "12/10/2021",
			tripName: "Sudan",
		},
		{
			id: uuidv4(),
			departDate: "22/9/2021",
			items: [],
			returnDate: "11/10/2021",
			tripName: "Spain",
		},
		{
			id: uuidv4(),
			departDate: "21/9/2021",
			items: [],
			returnDate: "10/10/2021",
			tripName: "Thailand",
		},
	],
};

// handles dispached actions from trip planner
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
			return produce(state, (draftState) => {
				draftState.trips[action.payload.tripIndex].items.push(
					action.payload.item
				);
			});

		case "REMOVE_TRIP":
			return produce(state, (draftState) => {
				delete draftState.trips[action.payload.tripIndex];
			});

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
