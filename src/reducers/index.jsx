import inventoryItemsReducer from "./InventoryManagmentSlice";
import tripScheduleReducer from "./TripPlannerSlice";
import activeTabReducer from "./ActiveTabSlice";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
	inventoryReducer: inventoryItemsReducer,
	tripReducer: tripScheduleReducer,
	activeTab: activeTabReducer,
});

export default rootReducers;
