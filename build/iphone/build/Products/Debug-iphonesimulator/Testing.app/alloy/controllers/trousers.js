function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId127(e) {
        if (e && e.fromAdapter) return;
        __alloyId127.opts || {};
        var models = showCatagory(__alloyId126);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId117 = models[i];
            __alloyId117.__transform = addPath(__alloyId117);
            var __alloyId119 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId117.__transform["id"] ? __alloyId117.__transform["id"] : __alloyId117.get("id"),
                height: "50%"
            });
            rows.push(__alloyId119);
            var __alloyId121 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId117.__transform["imagesWithPath"] ? __alloyId117.__transform["imagesWithPath"] : __alloyId117.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "10%"
            });
            __alloyId119.add(__alloyId121);
            var __alloyId123 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId117.__transform["name"] ? __alloyId117.__transform["name"] : __alloyId117.get("name")
            });
            __alloyId119.add(__alloyId123);
            var __alloyId125 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId117.__transform["price"] ? __alloyId117.__transform["price"] : __alloyId117.get("price")
            });
            __alloyId119.add(__alloyId125);
        }
        $.__views.__alloyId116.setData(rows);
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
    $.__views.__alloyId116 = Ti.UI.createTableView({
        id: "__alloyId116"
    });
    $.__views.win.add($.__views.__alloyId116);
    var __alloyId126 = Alloy.Collections["items"] || items;
    __alloyId126.on("fetch destroy change add remove reset", __alloyId127);
    showItem ? $.addListener($.__views.__alloyId116, "click", showItem) : __defers["$.__views.__alloyId116!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId126.off("fetch destroy change add remove reset", __alloyId127);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId116!click!showItem"] && $.addListener($.__views.__alloyId116, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;