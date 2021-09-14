import { v4 as uuidv4 } from "uuid";
import produce from "immer";
import { comparatorTripListByDeparture } from "../utils/AppUtilities";

const initialState = {
	trips: [],
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
		// from action payload and filters/remove data
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

		case "STATE_LOAD_TRIPS_PLANNER": {
			return produce(state, (draftState) => {
				draftState.trips = action.payload;
			});
		}

		case "STATE_ADD_TRIP_PLANNER": {
			return produce(state, (draftState) => {
				Object.values(draftState.trips.push(action.payload)).sort(
					comparatorTripListByDeparture
				);
			});
		}

		case "STATE_REMOVE_TRIP_PLANNER": {
			return produce(state, (draftState) => {
				draftState.trips = [
					...state.trips.filter(
						(trip) => trip.id !== action.payload.tripDetails.id
					),
				];
			});
		}

		case "STATE_ADD_ITEMS_TO_TRIP_PLANNER": {
			return produce(state, (draftState) => {
				console.log("slice", action.payload);
				Object.values(draftState.trips)
					.sort(comparatorTripListByDeparture)
					[action.payload.tripIndex].items.push(action.payload.item);
			});
		}

		case "STATE_REMOVE_ITEMS_IN_TRIP_PLANNER": {
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
