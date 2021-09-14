import React, { useState, useEffect } from "react";
import { Card, FormControl, InputGroup, Button } from "react-bootstrap";
import ItemTag from "./ItemTag";
import { useSelector, useDispatch } from "react-redux";
import { comparatorItemsListByName } from "../utils/appUtilities";
import {
	getAllItemsHandler,
	postItemHandler,
} from "../services/itemsAndTripsService";
import { apiLoadItems, apiAddItems } from "../actions";
import { v4 as uuidv4 } from "uuid";

function InventoryManagment() {
	//retriving information from state
	const itemList = useSelector((state) =>
		Object.values(state.inventoryReducer.items).sort(comparatorItemsListByName)
	);

	const dispatch = useDispatch();
	const [item, setItem] = useState("");

	// returns list of items from API after loading the component
	useEffect(() => {
		console.log("useeffect");
		const fetchItems = async () => {
			let items = await getAllItemsHandler();
			dispatch(apiLoadItems(items));
		};
		fetchItems();
	}, []);

	const InputFieldEventHandler = (e) => {
		setItem(e.target.value);
		if (Number(item)) {
			alert("itemshould be a string");
			setItem(" ");
		}
	};

	return (
		<Card>
			<div>
				<InputGroup className="mb-3" style={{ width: 400 }}>
					<FormControl
						placeholder="hair dyer"
						value={item}
						onChange={InputFieldEventHandler}
					/>
					<Button
						disabled={item === ""}
						onClick={() => {
							if (item) {
								let id = uuidv4();
								const data = { id: id, name: item };
								// POST request on API
								postItemHandler(data);
								// dispach action with corresponding data to reducer
								dispatch(apiAddItems(data));
								setItem("");
							}
						}}
					>
						Create new Item
					</Button>
				</InputGroup>
			</div>

			<ItemTag itemList={itemList} />
		</Card>
	);
}

export default InventoryManagment;
