

function jackets(e) {
	
	var jackets = Alloy.createController("jackets");
	$.index.activeTab.open(dresses.getView());
}

function dresses(e) {
	
	var dresses = Alloy.createController("dresses");
	$.index.activeTab.open(dresses.getView());
}

function trousers(e) {

	var trousers = Alloy.createController("trousers");
	$.index.activeTab.open(trousers.getView());
}

function tops(e) {

	var tops = Alloy.createController("tops");
	$.index.activeTab.open(tops.getView());
}