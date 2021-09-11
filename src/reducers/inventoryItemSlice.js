import { v4 as uuidv4 } from "uuid";

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
			return {
				...state,
				items: [
					...state.items,
					{
						id: uuidv4(),
						name: action.payload,
					},
				],
			};
		}

		case "REMOVE_ITEM": {
			//console.log(state, action.payload);
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};
		}

		default:
			return state;
	}
};
export default inventoryItemsReducer;
