import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { stateAddItemsToTrip, stateRemoveTrip } from "../../actions";
import "rsuite/dist/styles/rsuite-default.css";
import { comparatorTripListByDeparture } from "../../utils/AppUtilities";
import {
	removeTripHandler,
	putItemToTripHandler,
} from "../../services/ItemsAndTripsService";

const SelectItemPicker = (props) => {
	const tripsList = useSelector((state) =>
		Object.values(state.tripReducer.trips).sort(comparatorTripListByDeparture)
	);
	const itemList = useSelector((state) => state.inventoryReducer.items);
	const [selectedItem, setSelectedItem] = useState(" ");
	const dispatch = useDispatch();

	//console.log(tripsList);

	const updateItemName = (e) => {
		setSelectedItem(e.target.value);
	};

	// finds item from inventory and dispach actions to add items to a trip
	const onClickAddItemTripHandler = () => {
		let data = {
			tripIndex: props.tripIndex,
			item: itemList.find((item) => item.id === selectedItem),
			trip: tripsList[props.tripIndex],
		};
		//PUT request to API to add items to corresponding trip
		putItemToTripHandler(data);

		// dispatches action to add items trip
		dispatch(stateAddItemsToTrip(data));
		setSelectedItem(" ");
	};

	const onClickRemoveTripHandler = () => {
		// DELETE request to API
		removeTripHandler(tripsList[props.tripIndex].id);

		// dispatches action to remove trip from the list
		dispatch(
			stateRemoveTrip({
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
					{/* A-A^B selection form should display items which are not in common with inventory */}
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
					onClick={onClickAddItemTripHandler}
				>
					Add Item
				</Button>
				<Button variant="danger" onClick={onClickRemoveTripHandler}>
					Delete Trip
				</Button>
			</div>
		</div>
	);
};

export default SelectItemPicker;
