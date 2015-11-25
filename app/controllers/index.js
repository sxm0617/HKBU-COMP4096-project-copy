$.index.open();

Alloy.Collections.items.fetch();

function categories(e) {
	
	var categories = Alloy.createController("categories");
	$.index.activeTab.open(categories.getView());
}

Alloy.Globals.tabGroup = $.index;
