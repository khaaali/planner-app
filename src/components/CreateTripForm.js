import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTrip } from "../actions";
import { useSelector } from "react-redux";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { v4 as uuidv4 } from "uuid";
import { comparatorTripListByDeparture } from "../utils/tripUtilities";

const CreateTripForm = () => {
	const tripsList = useSelector((state) =>
		Object.values(state.tripReducer.trips).sort(comparatorTripListByDeparture)
	);
	const dispatch = useDispatch();
	const { beforeToday } = DateRangePicker;
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

	// returns trip if date already exsists
	const isDepartureReturnDateExist = (selectedDate) => {
		return tripsList.some((trip) => {
			return (
				selectedDate === trip.departDate || selectedDate === trip.returnDate
			);
		});
	};

	const isDateBetweenDepartureReturn = (selectedDate) => {
		return tripsList.some((trip) => {
			return selectedDate > trip.departDate && selectedDate < trip.returnDate;
		});
	};

	const handleCreateTripValidation = () => {
		return (
			isDepartureReturnDateExist(departDate) &&
			isDepartureReturnDateExist(returnDate) &&
			isDateBetweenDepartureReturn(departDate) &&
			isDateBetweenDepartureReturn(returnDate)
		);
	};

	const onClickCreateNewTrip = () => {
		// no valid trip on true
		if (!handleCreateTripValidation()) {
			console.log(
				"isDepartureReturnDateExist",
				isDepartureReturnDateExist(departDate)
			);
			console.log(
				"isDepartureReturnDateExist",
				isDepartureReturnDateExist(returnDate)
			);
			console.log(
				"isDateBetweenDepartureReturn",
				isDateBetweenDepartureReturn(departDate)
			);
			console.log(
				"isDateBetweenDepartureReturn",
				isDateBetweenDepartureReturn(departDate)
			);

			alert("choose different dates");
			setTripName("");
			setDepartDate("");
			setReturnDate("");
			setDate([]);
		} else {
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
		}
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
						disabledDate={beforeToday()}
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
