function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId120(e) {
        if (e && e.fromAdapter) return;
        __alloyId120.opts || {};
        var models = showCatagory(__alloyId119);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId110 = models[i];
            __alloyId110.__transform = addPath(__alloyId110);
            var __alloyId112 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId110.__transform["id"] ? __alloyId110.__transform["id"] : __alloyId110.get("id"),
                height: "50%"
            });
            rows.push(__alloyId112);
            var __alloyId114 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId110.__transform["imagesWithPath"] ? __alloyId110.__transform["imagesWithPath"] : __alloyId110.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "10%"
            });
            __alloyId112.add(__alloyId114);
            var __alloyId116 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId110.__transform["name"] ? __alloyId110.__transform["name"] : __alloyId110.get("name")
            });
            __alloyId112.add(__alloyId116);
            var __alloyId118 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId110.__transform["price"] ? __alloyId110.__transform["price"] : __alloyId110.get("price")
            });
            __alloyId112.add(__alloyId118);
        }
        $.__views.__alloyId109.setData(rows);
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
    $.__views.tops = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: "true",
        title: "Tops",
        id: "tops"
    });
    $.__views.tops && $.addTopLevelView($.__views.tops);
    $.__views.__alloyId109 = Ti.UI.createTableView({
        id: "__alloyId109"
    });
    $.__views.tops.add($.__views.__alloyId109);
    var __alloyId119 = Alloy.Collections["items"] || items;
    __alloyId119.on("fetch destroy change add remove reset", __alloyId120);
    showItem ? $.addListener($.__views.__alloyId109, "click", showItem) : __defers["$.__views.__alloyId109!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId119.off("fetch destroy change add remove reset", __alloyId120);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId109!click!showItem"] && $.addListener($.__views.__alloyId109, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;