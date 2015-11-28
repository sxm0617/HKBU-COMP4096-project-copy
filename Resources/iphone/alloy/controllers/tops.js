function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId112(e) {
        if (e && e.fromAdapter) return;
        __alloyId112.opts || {};
        var models = showCatagory(__alloyId111);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId102 = models[i];
            __alloyId102.__transform = addPath(__alloyId102);
            var __alloyId104 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId102.__transform["id"] ? __alloyId102.__transform["id"] : __alloyId102.get("id"),
                height: "50%"
            });
            rows.push(__alloyId104);
            var __alloyId106 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId102.__transform["imagesWithPath"] ? __alloyId102.__transform["imagesWithPath"] : __alloyId102.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "10%"
            });
            __alloyId104.add(__alloyId106);
            var __alloyId108 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId102.__transform["name"] ? __alloyId102.__transform["name"] : __alloyId102.get("name")
            });
            __alloyId104.add(__alloyId108);
            var __alloyId110 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId102.__transform["price"] ? __alloyId102.__transform["price"] : __alloyId102.get("price")
            });
            __alloyId104.add(__alloyId110);
        }
        $.__views.__alloyId101.setData(rows);
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
    $.__views.__alloyId101 = Ti.UI.createTableView({
        id: "__alloyId101"
    });
    $.__views.win.add($.__views.__alloyId101);
    var __alloyId111 = Alloy.Collections["items"] || items;
    __alloyId111.on("fetch destroy change add remove reset", __alloyId112);
    showItem ? $.addListener($.__views.__alloyId101, "click", showItem) : __defers["$.__views.__alloyId101!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId111.off("fetch destroy change add remove reset", __alloyId112);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId101!click!showItem"] && $.addListener($.__views.__alloyId101, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;