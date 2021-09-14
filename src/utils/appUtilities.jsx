//lexical order
const comparatorItemsListByName = (left, right) => {
	let comp_left = left.name.toLowerCase(),
		comp_right = right.name.toLowerCase();
	return comp_left === comp_right ? 0 : comp_left > comp_right ? 1 : -1;
};

//ascending order
const comparatorTripListByDeparture = (left, right) => {
	let comp_left = new Date(left.departDate),
		comp_right = new Date(right.departDate);
	return comp_left === comp_right ? 0 : comp_left > comp_right ? -1 : 1;
};

export { comparatorItemsListByName, comparatorTripListByDeparture };
