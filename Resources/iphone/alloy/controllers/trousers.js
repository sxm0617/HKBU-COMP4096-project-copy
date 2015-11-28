function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId134(e) {
        if (e && e.fromAdapter) return;
        __alloyId134.opts || {};
        var models = showCatagory(__alloyId133);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId124 = models[i];
            __alloyId124.__transform = addPath(__alloyId124);
            var __alloyId126 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId124.__transform["id"] ? __alloyId124.__transform["id"] : __alloyId124.get("id"),
                height: "50%"
            });
            rows.push(__alloyId126);
            var __alloyId128 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId124.__transform["imagesWithPath"] ? __alloyId124.__transform["imagesWithPath"] : __alloyId124.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "10%"
            });
            __alloyId126.add(__alloyId128);
            var __alloyId130 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId124.__transform["name"] ? __alloyId124.__transform["name"] : __alloyId124.get("name")
            });
            __alloyId126.add(__alloyId130);
            var __alloyId132 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId124.__transform["price"] ? __alloyId124.__transform["price"] : __alloyId124.get("price")
            });
            __alloyId126.add(__alloyId132);
        }
        $.__views.__alloyId123.setData(rows);
    }
    function showItem(e) {
        var details = Alloy.createController("details", {
            pid: e.row.pid
        });
        Alloy.Globals.tabGroup.activeTab.open(details.getView());
    }
    function showCatagory(collection) {
        return collection.where({
            category: "trousers"
        });
    }
    function addPath(model) {
        transform = model.toJSON();
        transform.imagesWithPath = "/" + transform.images;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "trousers";
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
    $.__views.trousers = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: "true",
        title: "Trousers",
        id: "trousers"
    });
    $.__views.trousers && $.addTopLevelView($.__views.trousers);
    $.__views.__alloyId123 = Ti.UI.createTableView({
        id: "__alloyId123"
    });
    $.__views.trousers.add($.__views.__alloyId123);
    var __alloyId133 = Alloy.Collections["items"] || items;
    __alloyId133.on("fetch destroy change add remove reset", __alloyId134);
    showItem ? $.addListener($.__views.__alloyId123, "click", showItem) : __defers["$.__views.__alloyId123!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId133.off("fetch destroy change add remove reset", __alloyId134);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId123!click!showItem"] && $.addListener($.__views.__alloyId123, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;