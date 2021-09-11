import React, { useState } from "react";
import { Card, FormControl, InputGroup, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTrip } from "../actions";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

const CreateTripForm = () => {
	const itemList = useSelector((state) => state.inventoryReducer.items);
	const dispatch = useDispatch();
	const tripsList = useSelector((state) => state.tripReducer.trips);
	const [tripName, setTripName] = useState("");
	const [departDate, setDepartDate] = useState("");
	const [returnDate, setReturnDate] = useState("");
	const [date, setDate] = useState([]);

	const captureTripName = (e) => {
		setTripName(e.target.value);
	};

	const onClickCreateNewTrip = () => {
		dispatch(
			addTrip({
				tripName: tripName,
				departDate: departDate,
				returnDate: returnDate,
				items: [],
			})
		);
		setTripName("");
		setDepartDate("");
		setReturnDate("");
		setDate("");
	};

	const selectedDateRange = (dates) => {
		if (dates.length) {
			setDate(
				setDepartDate(dates[0].toLocaleDateString("de-DE").replace(/\./g, "/"))
			);
			setDate(
				setReturnDate(dates[1].toLocaleDateString("de-DE").replace(/\./g, "/"))
			);
		}
	};
	return (
		<Form className="form-container">
			<Form.Group className="form-group">
				<Form.Label>
					<h5>Trip Name</h5>
				</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter trip name"
					value={tripName}
					onChange={captureTripName}
				/>
			</Form.Group>
			<Form.Group className="form-group">
				<Form.Label>
					<h5> Depart/Return</h5>
				</Form.Label>
				<DateRangePicker
					format="DD/MM/YYYY"
					onChange={selectedDateRange}
					value={date}
				/>
			</Form.Group>
			<Button onClick={() => onClickCreateNewTrip()}>Create New Trip</Button>
		</Form>
	);
};

export default CreateTripForm;
