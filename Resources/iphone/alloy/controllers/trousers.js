function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId99(e) {
        if (e && e.fromAdapter) return;
        __alloyId99.opts || {};
        var models = showCatagory(__alloyId98);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId89 = models[i];
            __alloyId89.__transform = addPath(__alloyId89);
            var __alloyId91 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId89.__transform["id"] ? __alloyId89.__transform["id"] : __alloyId89.get("id")
            });
            rows.push(__alloyId91);
            var __alloyId93 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId89.__transform["imagesWithPath"] ? __alloyId89.__transform["imagesWithPath"] : __alloyId89.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "50dp",
                left: "100dp"
            });
            __alloyId91.add(__alloyId93);
            var __alloyId95 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId89.__transform["name"] ? __alloyId89.__transform["name"] : __alloyId89.get("name")
            });
            __alloyId91.add(__alloyId95);
            var __alloyId97 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId89.__transform["price"] ? __alloyId89.__transform["price"] : __alloyId89.get("price")
            });
            __alloyId91.add(__alloyId97);
        }
        $.__views.__alloyId88.setData(rows);
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
    $.__views.__alloyId88 = Ti.UI.createTableView({
        id: "__alloyId88"
    });
    $.__views.win.add($.__views.__alloyId88);
    var __alloyId98 = Alloy.Collections["items"] || items;
    __alloyId98.on("fetch destroy change add remove reset", __alloyId99);
    showItem ? $.addListener($.__views.__alloyId88, "click", showItem) : __defers["$.__views.__alloyId88!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId98.off("fetch destroy change add remove reset", __alloyId99);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId88!click!showItem"] && $.addListener($.__views.__alloyId88, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;