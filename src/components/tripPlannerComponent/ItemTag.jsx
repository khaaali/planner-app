import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { stateDeleteItem, removeItemsInTrip } from "../../actions";
import { deleteItemHandler } from "../../services/ItemsAndTripsService";

const ItemTag = (props) => {
	const activeTab = useSelector((state) => state.activeTab);
	const dispatch = useDispatch();

	return (
		<div className="items_style">
			{Object.values(props.itemList).map((el) => (
				<ul key={el.id} className="tag">
					<span className="tag-label">{el.name}</span>
					<span
						className="close-tag"
						onClick={() => {
							// on Inventory Managment tab active
							if (activeTab.isInventoryTab) {
								// DELETE request on API
								deleteItemHandler(el);
								// dispach action with corresponding data to reducer
								dispatch(stateDeleteItem(el));
							} else
								dispatch(
									removeItemsInTrip({
										itemId: el.id,
										tripIndex: props.tripIndex,
									})
								);
							//console.log("dfaf");
						}}
					>
						X
					</span>
				</ul>
			))}
		</div>
	);
};

export default ItemTag;
