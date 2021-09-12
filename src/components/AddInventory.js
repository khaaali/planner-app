import React, { useState } from "react";
import { Card, FormControl, InputGroup, Button } from "react-bootstrap";
import ItemTag from "./ItemTag";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../actions";

function AddInventory() {
	const itemList = useSelector((state) => state.inventoryReducer.items);
	const [item, setItem] = useState("");
	const dispatch = useDispatch();

	const captureItem = (e) => {
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
						onChange={captureItem}
					/>
					<Button
						disabled={item === ""}
						onClick={() => {
							if (item) {
								dispatch(addItem(item));
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

export default AddInventory;
