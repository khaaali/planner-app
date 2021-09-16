const initialState = {
	isInventoryTab: true,
};

const activeTabReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TAB_SWITCH":
			return {
				...state,
				isInventoryTab: !state.isInventoryTab,
			};

		default:
			return {
				...state,
				isInventoryTab: state.isInventoryTab,
			};
	}
};
export default activeTabReducer;
