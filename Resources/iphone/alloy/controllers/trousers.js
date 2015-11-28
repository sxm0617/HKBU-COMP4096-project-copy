function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId126(e) {
        if (e && e.fromAdapter) return;
        __alloyId126.opts || {};
        var models = showCatagory(__alloyId125);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId116 = models[i];
            __alloyId116.__transform = addPath(__alloyId116);
            var __alloyId118 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId116.__transform["id"] ? __alloyId116.__transform["id"] : __alloyId116.get("id"),
                height: "50%"
            });
            rows.push(__alloyId118);
            var __alloyId120 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId116.__transform["imagesWithPath"] ? __alloyId116.__transform["imagesWithPath"] : __alloyId116.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "10%"
            });
            __alloyId118.add(__alloyId120);
            var __alloyId122 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId116.__transform["name"] ? __alloyId116.__transform["name"] : __alloyId116.get("name")
            });
            __alloyId118.add(__alloyId122);
            var __alloyId124 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId116.__transform["price"] ? __alloyId116.__transform["price"] : __alloyId116.get("price")
            });
            __alloyId118.add(__alloyId124);
        }
        $.__views.__alloyId115.setData(rows);
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
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        backgroundColor: "white",
        exitOnClose: "true",
        title: "Trousers"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId115 = Ti.UI.createTableView({
        id: "__alloyId115"
    });
    $.__views.win.add($.__views.__alloyId115);
    var __alloyId125 = Alloy.Collections["items"] || items;
    __alloyId125.on("fetch destroy change add remove reset", __alloyId126);
    showItem ? $.addListener($.__views.__alloyId115, "click", showItem) : __defers["$.__views.__alloyId115!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId125.off("fetch destroy change add remove reset", __alloyId126);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId115!click!showItem"] && $.addListener($.__views.__alloyId115, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;