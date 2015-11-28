function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId113(e) {
        if (e && e.fromAdapter) return;
        __alloyId113.opts || {};
        var models = showCatagory(__alloyId112);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId103 = models[i];
            __alloyId103.__transform = addPath(__alloyId103);
            var __alloyId105 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId103.__transform["id"] ? __alloyId103.__transform["id"] : __alloyId103.get("id"),
                height: "50%"
            });
            rows.push(__alloyId105);
            var __alloyId107 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId103.__transform["imagesWithPath"] ? __alloyId103.__transform["imagesWithPath"] : __alloyId103.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "10%"
            });
            __alloyId105.add(__alloyId107);
            var __alloyId109 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId103.__transform["name"] ? __alloyId103.__transform["name"] : __alloyId103.get("name")
            });
            __alloyId105.add(__alloyId109);
            var __alloyId111 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId103.__transform["price"] ? __alloyId103.__transform["price"] : __alloyId103.get("price")
            });
            __alloyId105.add(__alloyId111);
        }
        $.__views.__alloyId102.setData(rows);
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
    $.__views.__alloyId102 = Ti.UI.createTableView({
        id: "__alloyId102"
    });
    $.__views.win.add($.__views.__alloyId102);
    var __alloyId112 = Alloy.Collections["items"] || items;
    __alloyId112.on("fetch destroy change add remove reset", __alloyId113);
    showItem ? $.addListener($.__views.__alloyId102, "click", showItem) : __defers["$.__views.__alloyId102!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId112.off("fetch destroy change add remove reset", __alloyId113);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId102!click!showItem"] && $.addListener($.__views.__alloyId102, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;