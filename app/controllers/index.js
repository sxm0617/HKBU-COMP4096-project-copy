$.index.open();

Alloy.Collections.items.fetch();
Alloy.Collections.cart.fetch();

var cartObject = Alloy.Collections.cart;

function categories(e) {	
	var categories = Alloy.createController("categories");
	$.index.activeTab.open(categories.getView());
}

function about(e) {	
	var about = Alloy.createController("about");
	Alloy.Globals.tabGroup.activeTab.open(about.getView());
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
}

function deleteOne(e) {
	var firstModel = cartObject.at(0);
	firstModel.destroy();
}

Alloy.Globals.tabGroup = $.index;