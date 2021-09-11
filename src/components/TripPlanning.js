import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import CreateTripForm from "./CreateTripForm";
import ScheduledTripCard from "./ScheduledTripCard";
import "rsuite/dist/styles/rsuite-default.css";

const TripPlanning = () => {
	const tripsList = useSelector((state) => state.tripReducer.trips);

	return (
		<Card>
			<CreateTripForm />
			<hr />
			<div style={{ margin: 50 }}>
				{tripsList.map((trip, index) => (
					<ScheduledTripCard key={trip.id} trip={trip} tripIndex={index} />
				))}
			</div>
		</Card>
	);
};

export default TripPlanning;
