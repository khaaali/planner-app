import { v4 as uuidv4 } from "uuid";
import produce from "immer";
import { comparatorTripListByDeparture } from "../utils/appUtilities";

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
				Object.values(draftState.trips.push(action.payload)).sort(
					comparatorTripListByDeparture
				);
			});
		}
		case "ADD_ITEMS_TO_TRIP":
			//console.log("fa", action.payload.tripIndex);
			//console.log("sd", state.trips);
			return produce(state, (draftState) => {
				Object.values(draftState.trips)
					.sort(comparatorTripListByDeparture)
					[action.payload.tripIndex].items.push(action.payload.item);
			});

		case "REMOVE_TRIP":
			return produce(state, (draftState) => {
				draftState.trips = [
					...state.trips.filter(
						(trip) => trip.id !== action.payload.tripDetails.id
					),
				];
			});

		// on action, traverses state using "immer produce" on received index and item,
		// from actio payload and filters/remove data
		case "REMOVE_ITEMS_IN_TRIP": {
			return produce(state, (draftState) => {
				Object.values(draftState.trips).sort(comparatorTripListByDeparture)[
					action.payload.tripIndex
				].items = [
					...draftState.trips
						.sort(comparatorTripListByDeparture)
						[action.payload.tripIndex].items.filter(
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
