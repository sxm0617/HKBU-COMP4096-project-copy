function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId26(e) {
        if (e && e.fromAdapter) return;
        __alloyId26.opts || {};
        var models = __alloyId25.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId18 = models[i];
            __alloyId18.__transform = {};
            var __alloyId20 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            rows.push(__alloyId20);
            var __alloyId22 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId18.__transform["name"] ? __alloyId18.__transform["name"] : __alloyId18.get("name")
            });
            __alloyId20.add(__alloyId22);
            var __alloyId24 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId18.__transform["id"] ? __alloyId18.__transform["id"] : __alloyId18.get("id")
            });
            __alloyId20.add(__alloyId24);
        }
        $.__views.__alloyId17.setData(rows);
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
    Alloy.Collections.instance("events");
    var __alloyId7 = [];
    $.__views.__alloyId9 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Home Page",
        fullscreen: "true",
        id: "__alloyId9"
    });
    var __alloyId11 = [];
    $.__views.__alloyId12 = Ti.UI.createTableViewSection({
        id: "__alloyId12"
    });
    __alloyId11.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "vertical",
        height: "50%"
    });
    $.__views.__alloyId13.add($.__views.view);
    $.__views.homeImage = Ti.UI.createImageView({
        id: "homeImage",
        image: "/shopnow.png"
    });
    $.__views.__alloyId13.add($.__views.homeImage);
    categories ? $.addListener($.__views.homeImage, "click", categories) : __defers["$.__views.homeImage!click!categories"] = true;
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "vertical",
        height: "50%"
    });
    $.__views.__alloyId14.add($.__views.view);
    $.__views.homeImage = Ti.UI.createImageView({
        id: "homeImage",
        image: "/sale.png"
    });
    $.__views.__alloyId14.add($.__views.homeImage);
    $.__views.__alloyId10 = Ti.UI.createTableView({
        data: __alloyId11,
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId8 = Ti.UI.createTab({
        window: $.__views.__alloyId9,
        title: "Home",
        icon: "KS_nav_ui.png",
        id: "__alloyId8"
    });
    __alloyId7.push($.__views.__alloyId8);
    $.__views.__alloyId16 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 2",
        id: "__alloyId16"
    });
    $.__views.__alloyId17 = Ti.UI.createTableView({
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    var __alloyId25 = Alloy.Collections["events"] || events;
    __alloyId25.on("fetch destroy change add remove reset", __alloyId26);
    $.__views.__alloyId15 = Ti.UI.createTab({
        window: $.__views.__alloyId16,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId15"
    });
    __alloyId7.push($.__views.__alloyId15);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId7,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId25.off("fetch destroy change add remove reset", __alloyId26);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.Collections.events.fetch();
    __defers["$.__views.homeImage!click!categories"] && $.addListener($.__views.homeImage, "click", categories);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;