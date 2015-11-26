function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId57(e) {
        if (e && e.fromAdapter) return;
        __alloyId57.opts || {};
        var models = __alloyId56.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId47 = models[i];
            __alloyId47.__transform = {};
            var __alloyId49 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            rows.push(__alloyId49);
            var __alloyId51 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId47.__transform["name"] ? __alloyId47.__transform["name"] : __alloyId47.get("name")
            });
            __alloyId49.add(__alloyId51);
            var __alloyId53 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId47.__transform["id"] ? __alloyId47.__transform["id"] : __alloyId47.get("id")
            });
            __alloyId49.add(__alloyId53);
            var __alloyId55 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId47.__transform["number"] ? __alloyId47.__transform["number"] : __alloyId47.get("number")
            });
            __alloyId49.add(__alloyId55);
        }
        $.__views.__alloyId46.setData(rows);
    }
    function categories() {
        var categories = Alloy.createController("categories");
        $.index.activeTab.open(categories.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    var __alloyId36 = [];
    $.__views.__alloyId38 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Home Page",
        id: "__alloyId38"
    });
    var __alloyId40 = [];
    $.__views.__alloyId41 = Ti.UI.createTableViewSection({
        id: "__alloyId41"
    });
    __alloyId40.push($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "vertical",
        height: "50%"
    });
    $.__views.__alloyId42.add($.__views.view);
    $.__views.homeImage = Ti.UI.createImageView({
        id: "homeImage",
        image: "/shopnow.png"
    });
    $.__views.__alloyId42.add($.__views.homeImage);
    categories ? $.addListener($.__views.homeImage, "click", categories) : __defers["$.__views.homeImage!click!categories"] = true;
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        id: "__alloyId43"
    });
    $.__views.__alloyId41.add($.__views.__alloyId43);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "vertical",
        height: "50%"
    });
    $.__views.__alloyId43.add($.__views.view);
    $.__views.homeImage = Ti.UI.createImageView({
        id: "homeImage",
        image: "/sale.png"
    });
    $.__views.__alloyId43.add($.__views.homeImage);
    $.__views.__alloyId39 = Ti.UI.createTableView({
        data: __alloyId40,
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId37 = Ti.UI.createTab({
        window: $.__views.__alloyId38,
        title: "Home",
        icon: "KS_nav_ui.png",
        id: "__alloyId37"
    });
    __alloyId36.push($.__views.__alloyId37);
    $.__views.__alloyId45 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 2",
        id: "__alloyId45"
    });
    $.__views.__alloyId46 = Ti.UI.createTableView({
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    var __alloyId56 = Alloy.Collections["items"] || items;
    __alloyId56.on("fetch destroy change add remove reset", __alloyId57);
    $.__views.__alloyId44 = Ti.UI.createTab({
        window: $.__views.__alloyId45,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId44"
    });
    __alloyId36.push($.__views.__alloyId44);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId36,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId56.off("fetch destroy change add remove reset", __alloyId57);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.Collections.items.fetch();
    Alloy.Globals.tabGroup = $.index;
    __defers["$.__views.homeImage!click!categories"] && $.addListener($.__views.homeImage, "click", categories);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;