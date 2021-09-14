import inventoryItemsReducer from "./inventoryItemSlice";
import tripScheduleReducer from "./tripSlice";
import activeTabReducer from "./activeTabSlice";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
	inventoryReducer: inventoryItemsReducer,
	tripReducer: tripScheduleReducer,
	activeTab: activeTabReducer,
});

export default rootReducers;
