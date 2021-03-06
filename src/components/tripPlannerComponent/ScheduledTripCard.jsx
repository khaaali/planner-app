import React from "react";
import { Card } from "react-bootstrap";
import ItemTag from "./ItemTag";
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
					{new Date(props.tripDetails.departDate)
						.toLocaleDateString("de-DE")
						.replace(/\./g, "/")}
					-
					{new Date(props.tripDetails.returnDate)
						.toLocaleDateString("de-DE")
						.replace(/\./g, "/")}
				</Card.Title>
				{/* 	{console.log("itemstag",props.tripDetails.items)} */}
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
