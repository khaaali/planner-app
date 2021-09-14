import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import ScheduleTripForm from "./ScheduleTripForm";
import ScheduledTripCard from "./ScheduledTripCard";
import "rsuite/dist/styles/rsuite-default.css";
import { comparatorTripListByDeparture } from "../../utils/AppUtilities";

const TripPlanner = () => {
	const tripsList = useSelector((state) =>
		Object.values(state.tripReducer.trips).sort(comparatorTripListByDeparture)
	);

	return (
		<Card>
			<ScheduleTripForm />
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

export default TripPlanner;
