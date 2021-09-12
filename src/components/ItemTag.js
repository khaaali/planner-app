import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, removeItemsInTrip } from "../actions";

const ItemTag = (props) => {
	const activeTab = useSelector((state) => state.activeTab);
	const dispatch = useDispatch();

	return (
		<div className="items_style">
			{Object.values(props.itemList).map((el, index) => (
				<ul key={el.id} className="tag">
					<span className="tag-label">{el.name}</span>
					<span
						className="close-tag"
						onClick={() => {
							if (activeTab.isInventoryTab)
								dispatch(removeItem({ itemId: el.id }));
							else
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
