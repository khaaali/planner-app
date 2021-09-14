import produce from "immer";

const initialState = {
	items: [],
};

const inventoryItemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "STATE_LOAD_ITEMS_INVENTORY": {
			return produce(state, (draftState) => {
				draftState.items = action.payload;
			});
		}

		case "STATE_ADD_ITEM_INVENTORY":
			return produce(state, (draftState) => {
				console.log(action.payload);
				draftState.items.push(action.payload);
			});

		case "STATE_REMOVE_ITEM_INVENTORY": {
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
