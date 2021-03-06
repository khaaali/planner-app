import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import InventoryManagment from "./components/inventoryComponent/InventoryManagment";
import Header from "./components/Header";
import TripPlanner from "./components/tripPlannerComponent/TripPlanner";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const activeTab = useSelector((state) => state.activeTab);
	return (
		<Container>
			<div className="App">
				<Header />
				{activeTab.isInventoryTab === true ? (
					<InventoryManagment />
				) : (
					<TripPlanner />
				)}
			</div>
		</Container>
	);
}

export default App;
