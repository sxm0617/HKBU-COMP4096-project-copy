function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId44(e) {
        if (e && e.fromAdapter) return;
        __alloyId44.opts || {};
        var models = showCatagory(__alloyId43);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId34 = models[i];
            __alloyId34.__transform = addPath(__alloyId34);
            var __alloyId36 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId34.__transform["id"] ? __alloyId34.__transform["id"] : __alloyId34.get("id"),
                height: "50%"
            });
            rows.push(__alloyId36);
            var __alloyId38 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId34.__transform["imagesWithPath"] ? __alloyId34.__transform["imagesWithPath"] : __alloyId34.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "5%"
            });
            __alloyId36.add(__alloyId38);
            var __alloyId40 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId34.__transform["name"] ? __alloyId34.__transform["name"] : __alloyId34.get("name")
            });
            __alloyId36.add(__alloyId40);
            var __alloyId42 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId34.__transform["price"] ? __alloyId34.__transform["price"] : __alloyId34.get("price")
            });
            __alloyId36.add(__alloyId42);
        }
        $.__views.__alloyId33.setData(rows);
    }
    function showItem(e) {
        var details = Alloy.createController("details", {
            pid: e.row.pid
        });
        Alloy.Globals.tabGroup.activeTab.open(details.getView());
    }
    function showCatagory(collection) {
        return collection.where({
            category: "dresses"
        });
    }
    function addPath(model) {
        transform = model.toJSON();
        transform.imagesWithPath = "/" + transform.images;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dresses";
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
    $.__views.dresses = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: "true",
        title: "Dresses",
        id: "dresses"
    });
    $.__views.dresses && $.addTopLevelView($.__views.dresses);
    $.__views.__alloyId33 = Ti.UI.createTableView({
        id: "__alloyId33"
    });
    $.__views.dresses.add($.__views.__alloyId33);
    var __alloyId43 = Alloy.Collections["items"] || items;
    __alloyId43.on("fetch destroy change add remove reset", __alloyId44);
    showItem ? $.addListener($.__views.__alloyId33, "click", showItem) : __defers["$.__views.__alloyId33!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId43.off("fetch destroy change add remove reset", __alloyId44);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId33!click!showItem"] && $.addListener($.__views.__alloyId33, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;