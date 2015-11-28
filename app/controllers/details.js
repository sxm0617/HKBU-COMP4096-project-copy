var args = arguments[0] || {};

console.log(args.pid);

function showDetails (collection) {	
	return collection.where({id:args.pid});	
}

function addItem(item) {	
	var itemModel = Alloy.Collections.items;
	var itemCollections = itemModel.toJSON();
	item = itemCollections[args.pid - 1];
	
	var numberInStorage = item.number;
	var numberToBuy = $.textarea.value;
	
	if (isNaN(numberToBuy) || numberToBuy == "" || numberToBuy == "0") {
		alert("Please input a number 1-9!");
	} else {	
		if (numberInStorage < numberToBuy) {
			alert("Not enough goods in the storage!!");
		} else {	 	
			var model = Alloy.createModel("cart", {item_id:item.id, item_name: item.name, 
				item_price: item.price, item_number: numberToBuy, total_price: item.price * numberToBuy});
			Alloy.Collections.cart.add(model);
			model.save();
			alert("Item Added to cart!");
		}
	}
}

Alloy.Collections.items.fetch();