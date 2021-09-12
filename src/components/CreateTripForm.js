import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTrip } from "../actions";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { v4 as uuidv4 } from "uuid";

const CreateTripForm = () => {
	const dispatch = useDispatch();
	const [tripName, setTripName] = useState("");
	const [departDate, setDepartDate] = useState("");
	const [returnDate, setReturnDate] = useState("");
	const [date, setDate] = useState([]);

	const captureTripName = (e) => {
		setTripName(e.target.value);
		if (Number(tripName)) {
			alert("Trip name should be a string");
			setTripName("");
		}
	};

	const handleCreateTripValidation = () => {};

	console.log("date", departDate);
	const onClickCreateNewTrip = () => {
		dispatch(
			addTrip({
				id: uuidv4(),
				tripName: tripName,
				departDate: departDate,
				returnDate: returnDate,
				items: [],
			})
		);
		setTripName("");
		setDepartDate("");
		setReturnDate("");
		setDate([]);
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
		<div>
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
						value={date}
						onChange={selectedDateRange}
					/>
				</Form.Group>
				<Button disabled={tripName === ""} onClick={onClickCreateNewTrip}>
					Create New Trip
				</Button>
			</Form>
		</div>
	);
};

export default CreateTripForm;
