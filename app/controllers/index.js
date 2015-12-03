$.index.open();

Alloy.Collections.items.fetch();
Alloy.Collections.cart.fetch();

var cartObject = Alloy.Collections.cart;
var totalPrice;

function setTotalPrice() {
	totalPrice = 0;
	var numberOfItem = cartObject.length;
	if (numberOfItem > 0) {		
		for (var i = 0; i < numberOfItem; i++) {
			var model = cartObject.at(i);
			totalPrice += model.get("total_price");
		}
	}
	showTotalPrice();
};

function categories(e) {	
	var categories = Alloy.createController("categories");
	$.index.activeTab.open(categories.getView());
}

function about(e) {	
	var about = Alloy.createController("about");
	Alloy.Globals.tabGroup.activeTab.open(about.getView());
}

function showTotalPrice() {
	$.totalPrice.text="Total Price: " + totalPrice;
}

function deleteAll(e) {
	var numberOfItem = cartObject.length;
	if (numberOfItem > 0) {		
		for (var i = 0; i < numberOfItem; i++) {
			var model = cartObject.at(0);
			model.destroy();
		}
	} else {
		alert("The cart is already empty now!");
	}
	totalPrice = 0;
	showTotalPrice();
}

function deleteOne(e) {
	var model = cartObject.get(e.source.cid);
	model.destroy();
	totalPrice -= model.get("total_price");
	showTotalPrice();
}
	

Alloy.Globals.tabGroup = $.index;