var args = arguments[0] || {};

console.log(args.pid);

function showDetails (collection) {
	
	return collection.where({id:args.pid});
	
}

function addItem(item) {
	
	var itemModel = Alloy.Collections.items;
	var itemCollections = itemModel.toJSON();
	item = itemCollections[args.pid - 1];
	/*
	var itemNumber = $.itemNumber.value;
	alert(itemNumber);
	*/
	var numberOfItem = item.number;
	if (numberOfItem == 0) {
		alert("No goods in the storage!!");
	} else {		
		var model = Alloy.createModel("cart", {item_id:item.id, item_name: item.name, 
			item_price: item.price, item_number: 1, total_price: item.price});
		Alloy.Collections.cart.add(model);
		model.save();
		alert("Item Added to cart!");
	}
	
}


Alloy.Collections.items.fetch();