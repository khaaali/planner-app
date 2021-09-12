import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToTrip } from "../actions";
import ItemTag from "./ItemTag";
import { addTrip } from "../actions";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

const SelectItemPicker = (props) => {
	const tripsList = useSelector((state) => state.tripReducer.trips);
	const itemList = useSelector((state) => state.inventoryReducer.items);
	const [selectedItem, setSelectedItem] = useState(" ");
	const dispatch = useDispatch();

	//console.log(props);

	const updateItemName = (e) => {
		setSelectedItem(e.target.value);
	};

	return (
		<div>
			<div style={{ display: "flex", gap: 10 }}>
				<Form.Select
					key={`${props.tripIndex}-formSelect`}
					style={{ width: 160 }}
					value={selectedItem}
					onChange={updateItemName}
				>
					<option value=" " key={`${props.tripIndex}-options`}>
						Select any item
					</option>
					{itemList
						.filter(
							(ilist) =>
								!tripsList[props.tripIndex].items.some(
									(tlist) => ilist.id === tlist.id
								)
						)
						.map((item) => (
							<option
								key={`${item.id}+${props.tripIndex}-optionSelect`}
								value={item.id}
							>
								{item.name}
							</option>
						))}
				</Form.Select>
				<Button
					variant="primary"
					disabled={selectedItem === " "}
					onClick={() => {
						// finds item from inventory and dispach actions to add items to a trip
						dispatch(
							addItemsToTrip({
								tripIndex: props.tripIndex,
								item: itemList.find((item) => item.id === selectedItem),
							})
						);
						setSelectedItem(" ");
						console.log(
							itemList
								.filter(
									(ilist) =>
										!tripsList[props.tripIndex].items.some(
											(tlist) => ilist.id === tlist.id
										)
								)
								.map((item) => (
									<option
										key={`${item.id}+${props.tripIndex}-optionSelect`}
										value={item.id}
									>
										{item.name}
									</option>
								))
						);
					}}
				>
					Add Item
				</Button>
				<Button variant="danger"> Delete Trip</Button>
			</div>
		</div>
	);
};

export default SelectItemPicker;