import React, { useState } from "react";
import { Card, FormControl, InputGroup, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ItemTag from "./ItemTag";
import { addTrip } from "../actions";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

const ScheduledTripCard = (props) => {
	return (
		<Card>
			<Card.Header>
				<h6>{props.trip.tripName}</h6>
			</Card.Header>
			<Card.Body>
				<Card.Title>
					{props.trip.departDate} - {props.trip.returnDate}
				</Card.Title>

				<ItemTag itemList={props.trip.items} tripIndex={props.tripIndex} />
			</Card.Body>
		</Card>
	);
};

export default ScheduledTripCard;
