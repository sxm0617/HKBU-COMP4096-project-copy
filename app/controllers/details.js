var args = arguments[0] || {};

console.log(args.pid);

function showDetails (collection) {
	
	return collection.where({id:args.pid});
	
}

Alloy.Collections.items.fetch();