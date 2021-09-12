import { v4 as uuidv4 } from "uuid";
import produce from "immer";

const initialState = {
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

		default:
			return state;
	}
};
export default inventoryItemsReducer;
