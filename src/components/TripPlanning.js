import React, { useState } from "react";
import { Card, FormControl, InputGroup, Button, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import "rsuite/dist/styles/rsuite-default.css"; // or 'rsuite/dist/styles/rsuite-default.css'
import CreateTripForm from "./CreateTripForm";
import ItemTag from "./ItemTag";
import ScheduledTripCard from "./ScheduledTripCard";

const TripPlanning = () => {
	const tripsList = useSelector((state) => state.tripReducer.trips);
	const itemList = useSelector((state) => state.inventoryReducer.items);
	const dispatch = useDispatch();
	const [selectedItem, setSelectedItem] = useState("");

	const updateItemName = (e) => {
		setSelectedItem(e.target.value);
		//console.log(e.target);
	};

	return (
		<Card>
			<CreateTripForm />
			<hr />
			<div style={{ margin: 50 }}>
				{tripsList.map((trip, index) => (
					<ScheduledTripCard trip={trip} tripIndex={index} />
				))}
			</div>
		</Card>
	);
};

export default TripPlanning;
