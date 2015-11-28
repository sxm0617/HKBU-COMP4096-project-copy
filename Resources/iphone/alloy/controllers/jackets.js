function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId98(e) {
        if (e && e.fromAdapter) return;
        __alloyId98.opts || {};
        var models = showCatagory(__alloyId97);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId88 = models[i];
            __alloyId88.__transform = addPath(__alloyId88);
            var __alloyId90 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId88.__transform["id"] ? __alloyId88.__transform["id"] : __alloyId88.get("id"),
                height: "50%"
            });
            rows.push(__alloyId90);
            var __alloyId92 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId88.__transform["imagesWithPath"] ? __alloyId88.__transform["imagesWithPath"] : __alloyId88.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "10%"
            });
            __alloyId90.add(__alloyId92);
            var __alloyId94 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId88.__transform["name"] ? __alloyId88.__transform["name"] : __alloyId88.get("name")
            });
            __alloyId90.add(__alloyId94);
            var __alloyId96 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId88.__transform["price"] ? __alloyId88.__transform["price"] : __alloyId88.get("price")
            });
            __alloyId90.add(__alloyId96);
        }
        $.__views.__alloyId87.setData(rows);
    }
    function showItem(e) {
        var details = Alloy.createController("details", {
            pid: e.row.pid
        });
        Alloy.Globals.tabGroup.activeTab.open(details.getView());
    }
    function showCatagory(collection) {
        return collection.where({
            category: "jackets"
        });
    }
    function addPath(model) {
        var transform = model.toJSON();
        transform.imagesWithPath = "/" + transform.images;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "jackets";
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
        title: "Jackets"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId87 = Ti.UI.createTableView({
        id: "__alloyId87"
    });
    $.__views.win.add($.__views.__alloyId87);
    var __alloyId97 = Alloy.Collections["items"] || items;
    __alloyId97.on("fetch destroy change add remove reset", __alloyId98);
    showItem ? $.addListener($.__views.__alloyId87, "click", showItem) : __defers["$.__views.__alloyId87!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId97.off("fetch destroy change add remove reset", __alloyId98);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId87!click!showItem"] && $.addListener($.__views.__alloyId87, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;