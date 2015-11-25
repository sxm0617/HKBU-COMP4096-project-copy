

function jackets(e) {
	
	var jackets = Alloy.createController("jackets");
	Alloy.Globals.tabGroup.activeTab.open(jackets.getView());
}

function dresses(e) {
	
	var dresses = Alloy.createController("dresses");
	Alloy.Globals.tabGroup.activeTab.open(dresses.getView());
}

function trousers(e) {

	var trousers = Alloy.createController("trousers");
	Alloy.Globals.tabGroup.activeTab.open(trousers.getView());
}

function tops(e) {

	var tops = Alloy.createController("tops");
	Alloy.Globals.tabGroup.activeTab.open(tops.getView());
}