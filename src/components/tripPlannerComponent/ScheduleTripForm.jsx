import { Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { stateLoadTrips, stateAddTrip } from "../../actions";
import { useSelector } from "react-redux";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { v4 as uuidv4 } from "uuid";
import { comparatorTripListByDeparture } from "../../utils/AppUtilities";
import {
	getAllTripsHandler,
	postTripHandler,
} from "../../services/ItemsAndTripsService";

const ScheduleTripForm = () => {
	const tripsList = useSelector((state) =>
		Object.values(state.tripReducer.trips).sort(comparatorTripListByDeparture)
	);
	const dispatch = useDispatch();
	const { beforeToday } = DateRangePicker;
	const [tripName, setTripName] = useState("");
	const [departDate, setDepartDate] = useState("");
	const [returnDate, setReturnDate] = useState("");
	const [date, setDate] = useState([]);

	// returns list of trips from API after loading the component
	useEffect(() => {
		const fetchTrips = async () => {
			let trips = await getAllTripsHandler();
			dispatch(stateLoadTrips(trips));
		};
		fetchTrips();
	}, []);

	const captureTripName = (e) => {
		setTripName(e.target.value);
		if (Number(tripName)) {
			alert("Trip name should be a string");
			setTripName("");
		}
	};

	const selectedDateRange = (dates) => {
		if (dates.length) {
			setDate(setDepartDate(dates[0].valueOf()));
			setDate(setReturnDate(dates[1].valueOf()));
		}
	};

	// returns true if depatrue date already exsists in a trip
	const isDepartureDateExist = (selectedDate) => {
		return tripsList.some((trip) => {
			return selectedDate === trip.departDate;
		});
	};
	// returns true if return Date already exsists in a trip
	const isReturnDateExist = (selectedDate) => {
		return tripsList.some((trip) => {
			return selectedDate === trip.returnDate;
		});
	};
	// returns true if selected departure Date is between existing trip
	const isDateBetweenDeparture = (dep) => {
		return tripsList.some((trip) => {
			return dep > trip.departDate && dep < trip.returnDate;
		});
	};

	// returns true if selected return Date is between existing trip
	const isDateBetweenReturn = (ret) => {
		return tripsList.some((trip) => {
			return ret < trip.returnDate && ret > trip.departDate;
		});
	};

	const handleCreateTripValidation = () => {
		return (
			isDepartureDateExist(departDate) ||
			isDepartureDateExist(returnDate) ||
			isReturnDateExist(departDate) ||
			isReturnDateExist(returnDate) ||
			isDateBetweenDeparture(departDate) ||
			isDateBetweenReturn(returnDate)
		);
	};

	const onClickCreateNewTrip = () => {
		// no valid trip on true
		if (handleCreateTripValidation()) {
			setTripName("");
			setDepartDate("");
			setReturnDate("");
			setDate([]);
		} else {
			// POST request to API
			let data = {
				id: uuidv4(),
				tripName: tripName,
				departDate: departDate,
				returnDate: returnDate,
				items: [],
			};
			postTripHandler(data);
			// dispatch changes to state using reducer
			dispatch(stateAddTrip(data));
			// reset form
			setTripName("");
			setDepartDate("");
			setReturnDate("");
			setDate([]);
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

export default ScheduleTripForm;
