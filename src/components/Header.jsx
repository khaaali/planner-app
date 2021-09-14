import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { switchTab } from "../actions/index";

function Header() {
	var activeTab = useSelector((state) => state.activeTab);
	const dispatch = useDispatch();
	return (
		<div className="header">
			<h1 className="Title">My Trip Checklist</h1>
			<Tabs
				className="nav-tabs"
				activeKey={activeTab.isInventoryTab === true ? "Inventory" : "Trip"}
				onSelect={() => dispatch(switchTab(activeTab))}
			>
				<Tab eventKey="Inventory" title="Inventory Managment" />
				<Tab eventKey="Trip" title="Trip Planning" />
			</Tabs>
		</div>
	);
}

export default Header;
