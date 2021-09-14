import { v4 as uuidv4 } from "uuid";
import produce from "immer";

const initialState = {
	items: [],
};

const inventoryItemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_ITEM": {
			return produce(state, (draftState) => {
				draftState.items.push({ id: uuidv4(), name: action.payload });
			});
		}

		case "REMOVE_ITEM": {
			return produce(state, (draftState) => {
				draftState.items = [
					...state.items.filter((item) => item.id !== action.payload.itemId),
				];
			});
		}

		case "API_LOAD_ITEMS_INVENTORY": {
			return produce(state, (draftState) => {
				console.log(action.payload);
				draftState.items = action.payload;
			});
		}

		case "API_ADD_ITEMS_INVENTORY":
			return produce(state, (draftState) => {
				console.log(action.payload);
				draftState.items.push(action.payload);
			});

		case "API_DELETE_ITEMS_INVENTORY": {
			return produce(state, (draftState) => {
				draftState.items = [
					...state.items.filter((item) => item.id !== action.payload.id),
				];
			});
		}

		default:
			return state;
	}
};
export default inventoryItemsReducer;
