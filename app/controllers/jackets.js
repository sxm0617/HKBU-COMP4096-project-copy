function showItem(e) {	
	var details = Alloy.createController("details", {pid:e.row.pid});
	Alloy.Globals.tabGroup.activeTab.open(details.getView());	
}

function showCatagory(collection){	
	return collection.where({category:"jackets"});
}

function addPath(model) {	
	var transform = model.toJSON();	
	transform.imagesWithPath = "/" + transform.images;
	return transform;
}

Alloy.Collections.items.fetch();