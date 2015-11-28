$.index.open();

Alloy.Collections.items.fetch();
Alloy.Collections.cart.fetch();

var cartObject = Alloy.Collections.cart;

function categories(e) {
	
	var categories = Alloy.createController("categories");
	$.index.activeTab.open(categories.getView());
}

function deleteAll(e) {
	if (cartObject.length > 0) {
		alert(cartObject.length);
		for (var i = 0; i <= cartObject.length; i++) {
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
