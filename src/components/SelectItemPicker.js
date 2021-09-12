import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToTrip, removeTrip } from "../actions";
import ItemTag from "./ItemTag";
import { addTrip } from "../actions";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { comparatorTripListByDeparture } from "../utils/tripUtilities";

const SelectItemPicker = (props) => {
	const tripsList = useSelector((state) =>
		Object.values(state.tripReducer.trips).sort(comparatorTripListByDeparture)
	);
	const itemList = useSelector((state) => state.inventoryReducer.items);
	const [selectedItem, setSelectedItem] = useState(" ");
	const dispatch = useDispatch();

	console.log(tripsList);

	const updateItemName = (e) => {
		setSelectedItem(e.target.value);
	};

	// finds item from inventory and dispach actions to add items to a trip
	const handlerAddItemTrip = () => {
		dispatch(
			addItemsToTrip({
				tripIndex: props.tripIndex,
				item: itemList.find((item) => item.id === selectedItem),
			})
		);
		setSelectedItem(" ");
	};

	// dispaches action to remove trip from the list
	const handlerDeleteTrip = () => {
		dispatch(
			removeTrip({
				tripIndex: props.tripIndex,
				tripDetails: tripsList[props.tripIndex],
			})
		);
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
					{/* A-A^B form should display items which are not in common with inventory */}
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
					onClick={handlerAddItemTrip}
				>
					Add Item
				</Button>
				<Button variant="danger" onClick={handlerDeleteTrip}>
					Delete Trip
				</Button>
			</div>
		</div>
	);
};

export default SelectItemPicker;
