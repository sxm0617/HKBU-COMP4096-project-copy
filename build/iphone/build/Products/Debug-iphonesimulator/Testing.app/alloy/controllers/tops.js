function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId85(e) {
        if (e && e.fromAdapter) return;
        __alloyId85.opts || {};
        var models = showCatagory(__alloyId84);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId75 = models[i];
            __alloyId75.__transform = addPath(__alloyId75);
            var __alloyId77 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId75.__transform["id"] ? __alloyId75.__transform["id"] : __alloyId75.get("id")
            });
            rows.push(__alloyId77);
            var __alloyId79 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId75.__transform["imagesWithPath"] ? __alloyId75.__transform["imagesWithPath"] : __alloyId75.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "50dp",
                left: "100dp"
            });
            __alloyId77.add(__alloyId79);
            var __alloyId81 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId75.__transform["name"] ? __alloyId75.__transform["name"] : __alloyId75.get("name")
            });
            __alloyId77.add(__alloyId81);
            var __alloyId83 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId75.__transform["price"] ? __alloyId75.__transform["price"] : __alloyId75.get("price")
            });
            __alloyId77.add(__alloyId83);
        }
        $.__views.__alloyId74.setData(rows);
    }
    function showItem(e) {
        var details = Alloy.createController("details", {
            pid: e.row.pid
        });
        Alloy.Globals.tabGroup.activeTab.open(details.getView());
    }
    function showCatagory(collection) {
        return collection.where({
            category: "tops"
        });
    }
    function addPath(model) {
        transform = model.toJSON();
        transform.imagesWithPath = "/" + transform.images;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tops";
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
        title: "Tops"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId74 = Ti.UI.createTableView({
        id: "__alloyId74"
    });
    $.__views.win.add($.__views.__alloyId74);
    var __alloyId84 = Alloy.Collections["items"] || items;
    __alloyId84.on("fetch destroy change add remove reset", __alloyId85);
    showItem ? $.addListener($.__views.__alloyId74, "click", showItem) : __defers["$.__views.__alloyId74!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId84.off("fetch destroy change add remove reset", __alloyId85);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId74!click!showItem"] && $.addListener($.__views.__alloyId74, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;