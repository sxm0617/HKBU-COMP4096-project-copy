function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId33(e) {
        if (e && e.fromAdapter) return;
        __alloyId33.opts || {};
        var models = showCatagory(__alloyId32);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId23 = models[i];
            __alloyId23.__transform = addPath(__alloyId23);
            var __alloyId25 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId23.__transform["id"] ? __alloyId23.__transform["id"] : __alloyId23.get("id")
            });
            rows.push(__alloyId25);
            var __alloyId27 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId23.__transform["imagesWithPath"] ? __alloyId23.__transform["imagesWithPath"] : __alloyId23.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "50dp",
                left: "100dp"
            });
            __alloyId25.add(__alloyId27);
            var __alloyId29 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId23.__transform["name"] ? __alloyId23.__transform["name"] : __alloyId23.get("name")
            });
            __alloyId25.add(__alloyId29);
            var __alloyId31 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId23.__transform["price"] ? __alloyId23.__transform["price"] : __alloyId23.get("price")
            });
            __alloyId25.add(__alloyId31);
        }
        $.__views.__alloyId22.setData(rows);
    }
    function showItem(e) {
        var details = Alloy.createController("details", {
            pid: e.row.pid
        });
        Alloy.Globals.tabGroup.activeTab.open(details.getView());
    }
    function showCatagory(collection) {
        return collection.where({
            category: "dresses"
        });
    }
    function addPath(model) {
        transform = model.toJSON();
        transform.imagesWithPath = "/" + transform.images;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dresses";
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
        title: "Dresses"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId22 = Ti.UI.createTableView({
        id: "__alloyId22"
    });
    $.__views.win.add($.__views.__alloyId22);
    var __alloyId32 = Alloy.Collections["items"] || items;
    __alloyId32.on("fetch destroy change add remove reset", __alloyId33);
    showItem ? $.addListener($.__views.__alloyId22, "click", showItem) : __defers["$.__views.__alloyId22!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId32.off("fetch destroy change add remove reset", __alloyId33);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId22!click!showItem"] && $.addListener($.__views.__alloyId22, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;