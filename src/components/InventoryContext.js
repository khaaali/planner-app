/* import React, { useState, createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const InventoryContext = createContext();

const initialState = {
	itemLists: [
		{
			id: 243,
			name: "das",
		},
		{
			id: 43,
			name: "as",
		},
	],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return {
				itemLists: [...state.itemLists, action.payload],
			};
		case "DEL_ITEM":
			return {
				itemLists: state.itemLists.filter((item) => item.id !== action.payload),
			};
		default:
			throw new Error();
	}
};

export const InventoryProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<InventoryContext.Provider value={[state, dispatch]}>
			{props.childern}
		</InventoryContext.Provider>
	);
};
 */