function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId25(e) {
        if (e && e.fromAdapter) return;
        __alloyId25.opts || {};
        var models = __alloyId24.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId17 = models[i];
            __alloyId17.__transform = {};
            var __alloyId19 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            rows.push(__alloyId19);
            var __alloyId21 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId17.__transform["name"] ? __alloyId17.__transform["name"] : __alloyId17.get("name")
            });
            __alloyId19.add(__alloyId21);
            var __alloyId23 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId17.__transform["id"] ? __alloyId17.__transform["id"] : __alloyId17.get("id")
            });
            __alloyId19.add(__alloyId23);
        }
        $.__views.__alloyId16.setData(rows);
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
    var __alloyId6 = [];
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Home Page",
        id: "__alloyId8"
    });
    var __alloyId10 = [];
    $.__views.__alloyId11 = Ti.UI.createTableViewSection({
        id: "__alloyId11"
    });
    __alloyId10.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "vertical",
        height: "50%"
    });
    $.__views.__alloyId12.add($.__views.view);
    $.__views.homeImage = Ti.UI.createImageView({
        id: "homeImage",
        image: "/shopnow.png"
    });
    $.__views.__alloyId12.add($.__views.homeImage);
    categories ? $.addListener($.__views.homeImage, "click", categories) : __defers["$.__views.homeImage!click!categories"] = true;
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "vertical",
        height: "50%"
    });
    $.__views.__alloyId13.add($.__views.view);
    $.__views.homeImage = Ti.UI.createImageView({
        id: "homeImage",
        image: "/sale.png"
    });
    $.__views.__alloyId13.add($.__views.homeImage);
    $.__views.__alloyId9 = Ti.UI.createTableView({
        data: __alloyId10,
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId7 = Ti.UI.createTab({
        window: $.__views.__alloyId8,
        title: "Home",
        icon: "KS_nav_ui.png",
        id: "__alloyId7"
    });
    __alloyId6.push($.__views.__alloyId7);
    $.__views.__alloyId15 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 2",
        id: "__alloyId15"
    });
    $.__views.__alloyId16 = Ti.UI.createTableView({
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    var __alloyId24 = Alloy.Collections["events"] || events;
    __alloyId24.on("fetch destroy change add remove reset", __alloyId25);
    $.__views.__alloyId14 = Ti.UI.createTab({
        window: $.__views.__alloyId15,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId14"
    });
    __alloyId6.push($.__views.__alloyId14);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId6,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId24.off("fetch destroy change add remove reset", __alloyId25);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.Collections.events.fetch();
    __defers["$.__views.homeImage!click!categories"] && $.addListener($.__views.homeImage, "click", categories);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;