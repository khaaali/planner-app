/* import React, { useContext,useState,useEffect  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InventoryContext } from './InventoryContext';

function Inventory() {

    const [item, setItem] = useState("");
    const [itemList,setItemList]=useState(() => {
        // getting stored value
        const saved = localStorage.getItem("itemlist");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

const createItem= (e)=>{
    e.preventDefault()
    const itm=[
        ...itemList,
        {
        id:uuidv4(),
        name:item
        }
    ]
    setItemList(itm)
    
    //console.log(itemList.length)
    //console.log(...itemList)
}

const changeHandler=(e)=>{
    e.preventDefault()
    setItem(e.target.value)
}


    const removeItem =(id)=>{
        console.log(itemList.filter((item) => item.id !== id))
         localStorage.setItem("itemlist",JSON.stringify(itemList.filter((item) => item.id !== id)))
    }
    
    useEffect(() =>{
        console.log(itemList)
        localStorage.setItem("itemlist",JSON.stringify(itemList));
        },[itemList]);
     
       

    return (
        <div >
          
            <div className="center">
                <ul className="routes" > Inventory Managment</ul>
                <ul className="routes" > Trip Planning</ul>
            </div>
            <div>
                <form>
                    <input type="text" name="name" placeholder="hair dyer" value={item} onChange={changeHandler} />
                    <button onClick={createItem}>
                        Create new Item 
                    </button>
                </form>
            </div>

            <div className="items_style">
                 {itemList.map(
                      (el)=>
                       <ul key={el.id} onClick={() => removeItem(el.id)}>
                           {el.name} 
                           X</ul> 
                 )}
            </div>


        </div>


const [item, setItem] = useState("");

	const createItem = (e) => {
		e.preventDefault();
		setItem(e.target.value);
	};

	const addItem = (e) => {
		//e.preventDefault();
		dispatch({
			type: "ADD_ITEM",
			payload: { id: uuidv4(), name: item },
		});

		//	setItemList(() => [...itemList, { id: uuidv4(), name: item }]);
		//console.log(itemList.length)
		//console.log(...itemList)
	};

	return (
		<div>
			<div>
				<form onSubmit={addItem}>
					<input
						type="text"
						name="name"
						placeholder="hair dyer"
						value={item}
						onChange={createItem}
					/>
					<button>Create new Item</button>
				</form>
			</div>
		</div>
	);
    );
};

<Form.Select
									key={`${index}-formSelect`}
									style={{ width: 160 }}
									value={selectedItem}
									onChange={updateItemName}
								>
									<option value=" " key={`${index}-options`}>
										Select any item
									</option>
									{itemList
										.filter(
											(ilist) =>
												!tripsList[index].items.some(
													(tlist) => ilist.id === tlist.id
												)
										)
										.map((item) => (
											<option
												key={`${item.id}+${index}-optionSelect`}
												value={item.id}
											>
												{item.name}
											</option>
										))}
								</Form.Select>



								<Card>
			<CreateTripForm />
			<hr />
			<div style={{ margin: 50 }}>
				{tripsList.map((el, index) => (
					<Card key={el.id}>
						<Card.Header>
							<h6>{el.tripName}</h6>
						</Card.Header>
						<Card.Body>
							<Card.Title>
								{el.departDate} - {el.returnDate}
							</Card.Title>
							<div className="items_style">
								{el.items.map((el2, index2) => (
									<ul key={`${el2.id}-${index2}`} className="tag">
										<span className="tag-label">{el2.name}</span>
										<span
											className="close-tag"
											onClick={() => {
												const newTripList = [...tripsList];
												let newItemList = [...el.items];
												newItemList = newItemList.filter(
													(i) => i.id !== el2.id
												);
												newTripList[index].items = newItemList;
												//setTripList(newTripList);
											}}
										>
											X
										</span>
									</ul>
								))}
							</div>
							<div style={{ display: "flex", gap: 10 }}>
								<Button
									variant="primary"
									disabled={selectedItem === " "}
									onClick={() => {
										const newitemList = [...itemList];
										const newTripList = [...tripsList];
										const currentItems = [...tripsList[index].items];
										currentItems.push(
											newitemList.find((a) => a.id === selectedItem)
										);
										newTripList[index].items = currentItems;
										//setTripList(newTripList);
										console.log(tripsList);
										//console.log(tripList)
										console.log(itemList);
										console.log();
										setSelectedItem(" ");
									}}
								>
									Add New
								</Button>
								<Button
									variant="danger"
									onClick={() => {
										//setTripList(tripsList.filter((item) => item.id !== el.id));
										setSelectedItem("");
									}}
								>
									Delete Trip
								</Button>
							</div>
						</Card.Body>
					</Card>
				))}
			</div>
		</Card>

export default Inventory; */
