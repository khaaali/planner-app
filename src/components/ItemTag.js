import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, removeItemsInTrip } from "../actions";

const ItemTag = (props) => {
	const activeTab = useSelector((state) => state.activeTab);
	const dispatch = useDispatch();

	const comparatorItemsList = (left, right) => {
		let comp_left = left.name.toLowerCase(),
			comp_right = right.name.toLowerCase();
		return comp_left === comp_right ? 0 : comp_left > comp_right ? 1 : -1;
	};

	return (
		<div className="items_style">
			{ props.itemList.length === 0 ? null:
			props.itemList.sort(comparatorItemsList).map((el, index) => (
				<ul key={el.id} className="tag">
					<span className="tag-label">{el.name}</span>
					<span
						className="close-tag"
						onClick={() => {
							if (activeTab.isInventoryTab) dispatch(removeItem(el.id));
							else
								dispatch(
									removeItemsInTrip({ id: el.id, tripIndex: props.tripIndex })
								);
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
