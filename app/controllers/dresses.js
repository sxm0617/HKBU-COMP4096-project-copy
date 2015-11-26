function showItem(e) {
	
	var details = Alloy.createController("details", {pid:e.row.pid});
	Alloy.Globals.tabGroup.activeTab.open(details.getView());
	
	
}

function showCatagory(collection){
	
	return collection.where({category:"dresses"});
}

function addPath(model) {
	
	transform = model.toJSON();
	
	transform.imagesWithPath = "/" + transform.images;
	
	return transform;
}

Alloy.Collections.items.fetch();