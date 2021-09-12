import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ItemTag from "./ItemTag";
import { addTrip } from "../actions";
import { DateRangePicker } from "rsuite";
import SelectItemPicker from "./SelectItemPicker";
import "rsuite/dist/styles/rsuite-default.css";

const ScheduledTripCard = (props) => {
	return (
		<Card>
			<Card.Header>
				<h6>{props.tripDetails.tripName}</h6>
			</Card.Header>
			<Card.Body>
				<Card.Title>
					{props.tripDetails.departDate} - {props.tripDetails.returnDate}
				</Card.Title>
				<ItemTag
					itemList={props.tripDetails.items}
					tripIndex={props.tripIndex}
				/>
				<div style={{ display: "flex", gap: 10 }}>
					<SelectItemPicker
						tripDetails={props.tripDetails}
						tripIndex={props.tripIndex}
					/>
					
				</div>
			</Card.Body>
		</Card>
	);
};

export default ScheduledTripCard;
