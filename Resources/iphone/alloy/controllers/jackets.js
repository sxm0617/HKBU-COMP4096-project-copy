function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId106(e) {
        if (e && e.fromAdapter) return;
        __alloyId106.opts || {};
        var models = showCatagory(__alloyId105);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId96 = models[i];
            __alloyId96.__transform = addPath(__alloyId96);
            var __alloyId98 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId96.__transform["id"] ? __alloyId96.__transform["id"] : __alloyId96.get("id"),
                height: "50%"
            });
            rows.push(__alloyId98);
            var __alloyId100 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId96.__transform["imagesWithPath"] ? __alloyId96.__transform["imagesWithPath"] : __alloyId96.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "10%"
            });
            __alloyId98.add(__alloyId100);
            var __alloyId102 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId96.__transform["name"] ? __alloyId96.__transform["name"] : __alloyId96.get("name")
            });
            __alloyId98.add(__alloyId102);
            var __alloyId104 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId96.__transform["price"] ? __alloyId96.__transform["price"] : __alloyId96.get("price")
            });
            __alloyId98.add(__alloyId104);
        }
        $.__views.__alloyId95.setData(rows);
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
    $.__views.jackets = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: "true",
        title: "Jackets",
        id: "jackets"
    });
    $.__views.jackets && $.addTopLevelView($.__views.jackets);
    $.__views.__alloyId95 = Ti.UI.createTableView({
        id: "__alloyId95"
    });
    $.__views.jackets.add($.__views.__alloyId95);
    var __alloyId105 = Alloy.Collections["items"] || items;
    __alloyId105.on("fetch destroy change add remove reset", __alloyId106);
    showItem ? $.addListener($.__views.__alloyId95, "click", showItem) : __defers["$.__views.__alloyId95!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId105.off("fetch destroy change add remove reset", __alloyId106);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId95!click!showItem"] && $.addListener($.__views.__alloyId95, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;