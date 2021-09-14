import React, { useState, useEffect } from "react";
import { Card, FormControl, InputGroup, Button } from "react-bootstrap";
import ItemTag from "../tripPlannerComponent/ItemTag";
import { useSelector, useDispatch } from "react-redux";
import { comparatorItemsListByName } from "../../utils/AppUtilities";
import {
	getAllItemsHandler,
	postItemHandler,
} from "../../services/ItemsAndTripsService";
import { stateLoadItems, stateAddItem } from "../../actions";
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
		const fetchItems = async () => {
			let items = await getAllItemsHandler();
			dispatch(stateLoadItems(items));
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
								let data = { id: uuidv4(), name: item };
								// POST request on API
								postItemHandler(data);
								// dispach action with corresponding data to reducer
								dispatch(stateAddItem(data));
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
