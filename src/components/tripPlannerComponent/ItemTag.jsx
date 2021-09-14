import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { stateRemoveItem, stateRemoveItemFromTrip } from "../../actions";
import { comparatorTripListByDeparture } from "../../utils/AppUtilities";
import {
	removeItemHandler,
	removeItemInTripHandler,
} from "../../services/ItemsAndTripsService";

const ItemTag = (props) => {
	const activeTab = useSelector((state) => state.activeTab);
	const tripsList = useSelector((state) =>
		Object.values(state.tripReducer.trips).sort(comparatorTripListByDeparture)
	);
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
								removeItemHandler(el);
								// dispach action with corresponding data to reducer
								dispatch(stateRemoveItem(el));
							} else {
								let data = {
									itemId: el.id,
									tripIndex: props.tripIndex,
									trip: tripsList[props.tripIndex],
								};
								// DELETE request on API
								removeItemInTripHandler(data);

								dispatch(stateRemoveItemFromTrip(data));
							}

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
