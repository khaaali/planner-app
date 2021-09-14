import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import InventoryManagment from "./components/InventoryManagment";
import Header from "./components/Header";
import TripPlanning from "./components/TripPlanning";
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
					<TripPlanning />
				)}
			</div>
		</Container>
	);
}

export default App;
