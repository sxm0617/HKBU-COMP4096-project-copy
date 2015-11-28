function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId28(e) {
        if (e && e.fromAdapter) return;
        __alloyId28.opts || {};
        var models = showDetails(__alloyId27);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId15 = models[i];
            __alloyId15.__transform = {};
            var __alloyId17 = Ti.UI.createTableViewRow({
                layout: "vertical",
                height: "100%"
            });
            rows.push(__alloyId17);
            var __alloyId19 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId15.__transform["images"] ? __alloyId15.__transform["images"] : __alloyId15.get("images"),
                height: "350dp",
                width: "250dp",
                top: "25dp"
            });
            __alloyId17.add(__alloyId19);
            var __alloyId21 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId15.__transform["name"] ? __alloyId15.__transform["name"] : __alloyId15.get("name"),
                top: "25dp"
            });
            __alloyId17.add(__alloyId21);
            var __alloyId23 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId15.__transform["price"] ? __alloyId15.__transform["price"] : __alloyId15.get("price")
            });
            __alloyId17.add(__alloyId23);
            var __alloyId25 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId15.__transform["info"] ? __alloyId15.__transform["info"] : __alloyId15.get("info")
            });
            __alloyId17.add(__alloyId25);
            var __alloyId26 = Ti.UI.createButton({
                title: "Add to cart",
                bottom: "25dp",
                width: "100dp",
                height: "50dp"
            });
            __alloyId17.add(__alloyId26);
            addItem ? $.addListener(__alloyId26, "click", addItem) : __defers["__alloyId26!click!addItem"] = true;
        }
        $.__views.__alloyId14.setData(rows);
    }
    function showDetails(collection) {
        return collection.where({
            id: args.pid
        });
    }
    function addItem(item) {
        var itemModel = Alloy.Collections.items;
        var itemCollections = itemModel.toJSON();
        item = itemCollections[args.pid - 1];
        var numberOfItem = parseInt(item.number);
        if (0 == numberOfItem) alert("No goods in the storage!!"); else {
            var model = Alloy.createModel("cart", {
                item_id: item.id,
                item_name: item.name,
                item_price: item.price
            });
            Alloy.Collections.cart.add(model);
            model.save();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "details";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("items");
    $.__views.details = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "details"
    });
    $.__views.details && $.addTopLevelView($.__views.details);
    $.__views.__alloyId14 = Ti.UI.createTableView({
        id: "__alloyId14"
    });
    $.__views.details.add($.__views.__alloyId14);
    var __alloyId27 = Alloy.Collections["items"] || items;
    __alloyId27.on("fetch destroy change add remove reset", __alloyId28);
    exports.destroy = function() {
        __alloyId27.off("fetch destroy change add remove reset", __alloyId28);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    console.log(args.pid);
    Alloy.Collections.items.fetch();
    __defers["__alloyId26!click!addItem"] && $.addListener(__alloyId26, "click", addItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;