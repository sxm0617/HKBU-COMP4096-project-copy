$.index.open();

Alloy.Collections.events.fetch();

function categories(e) {
	
	var categories = Alloy.createController("categories");
	$.index.activeTab.open(categories.getView());
}