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
            var __alloyId16 = models[i];
            __alloyId16.__transform = {};
            var __alloyId18 = Ti.UI.createTableViewRow({
                layout: "vertical",
                height: "100%"
            });
            rows.push(__alloyId18);
            var __alloyId20 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId16.__transform["images"] ? __alloyId16.__transform["images"] : __alloyId16.get("images"),
                height: "350dp",
                width: "250dp",
                top: "25dp"
            });
            __alloyId18.add(__alloyId20);
            var __alloyId22 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId16.__transform["name"] ? __alloyId16.__transform["name"] : __alloyId16.get("name")
            });
            __alloyId18.add(__alloyId22);
            var __alloyId24 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId16.__transform["price"] ? __alloyId16.__transform["price"] : __alloyId16.get("price")
            });
            __alloyId18.add(__alloyId24);
            var __alloyId26 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId16.__transform["info"] ? __alloyId16.__transform["info"] : __alloyId16.get("info")
            });
            __alloyId18.add(__alloyId26);
        }
        $.__views.__alloyId15.setData(rows);
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
        var numberInStorage = item.number;
        var numberToBuy = $.textarea.value;
        if (isNaN(numberToBuy) || "" == numberToBuy || "0" == numberToBuy) alert("Please input a number 1-9!"); else if (numberToBuy > numberInStorage) alert("Not enough goods in the storage!!"); else {
            var model = Alloy.createModel("cart", {
                item_id: item.id,
                item_name: item.name,
                item_price: item.price,
                item_number: numberToBuy,
                total_price: item.price * numberToBuy
            });
            Alloy.Collections.cart.add(model);
            model.save();
            alert("Item Added to cart!");
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
    $.__views.__alloyId15 = Ti.UI.createTableView({
        id: "__alloyId15"
    });
    $.__views.details.add($.__views.__alloyId15);
    var __alloyId27 = Alloy.Collections["items"] || items;
    __alloyId27.on("fetch destroy change add remove reset", __alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        text: "Please input the number from 1 to 9",
        top: "82%",
        id: "__alloyId29"
    });
    $.__views.details.add($.__views.__alloyId29);
    $.__views.textarea = Ti.UI.createTextField({
        id: "textarea",
        borderColor: "#000",
        width: "30dp",
        textAlign: "center",
        top: "87%",
        maxLength: "1"
    });
    $.__views.details.add($.__views.textarea);
    $.__views.__alloyId30 = Ti.UI.createButton({
        title: "Add to cart",
        top: "90%",
        width: "100dp",
        height: "50dp",
        id: "__alloyId30"
    });
    $.__views.details.add($.__views.__alloyId30);
    addItem ? $.addListener($.__views.__alloyId30, "click", addItem) : __defers["$.__views.__alloyId30!click!addItem"] = true;
    exports.destroy = function() {
        __alloyId27.off("fetch destroy change add remove reset", __alloyId28);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    console.log(args.pid);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId30!click!addItem"] && $.addListener($.__views.__alloyId30, "click", addItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;