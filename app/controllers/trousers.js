function showItem(e) {
	
		var details = Alloy.createController("details", {pid:e.row.pid});
	Alloy.Globals.tabGroup.activeTab.open(details.getView());
	
	
}

function showCatagory(collection){
	
	return collection.where({category:"trousers"});
}

Alloy.Collections.items.fetch();