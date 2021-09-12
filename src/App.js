import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddInventory from "./components/AddInventory.js";
import Header from "./components/Header.js";
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
					<AddInventory />
				) : (
					<TripPlanning />
				)}
			</div>
		</Container>
	);
}

export default App;
