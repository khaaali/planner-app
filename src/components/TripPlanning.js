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
				{tripsList.map((tripDetails, tripIndex) => (
					<ScheduledTripCard
						key={tripDetails.id}
						tripDetails={tripDetails}
						tripIndex={tripIndex}
					/>
				))}
			</div>
		</Card>
	);
};

export default TripPlanning;
