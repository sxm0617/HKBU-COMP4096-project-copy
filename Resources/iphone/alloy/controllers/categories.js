function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function jackets() {
        var jackets = Alloy.createController("jackets");
        Alloy.Globals.tabGroup.activeTab.open(jackets.getView());
    }
    function dresses() {
        var dresses = Alloy.createController("dresses");
        Alloy.Globals.tabGroup.activeTab.open(dresses.getView());
    }
    function trousers() {
        var trousers = Alloy.createController("trousers");
        Alloy.Globals.tabGroup.activeTab.open(trousers.getView());
    }
    function tops() {
        var tops = Alloy.createController("tops");
        Alloy.Globals.tabGroup.activeTab.open(tops.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "categories";
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
    $.__views.categories = Ti.UI.createWindow({
        title: "Categories",
        backgroundColor: "white",
        id: "categories"
    });
    $.__views.categories && $.addTopLevelView($.__views.categories);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "50%",
        top: "10%",
        left: "0%",
        id: "__alloyId1"
    });
    $.__views.categories.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        image: "/jackets.jpg",
        height: "150dp",
        width: "100dp",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    jackets ? $.addListener($.__views.__alloyId2, "click", jackets) : __defers["$.__views.__alloyId2!click!jackets"] = true;
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Jackets",
        id: "__alloyId3"
    });
    $.__views.__alloyId1.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "50%",
        top: "10%",
        right: "0%",
        id: "__alloyId4"
    });
    $.__views.categories.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createImageView({
        image: "/dresses.jpg",
        height: "150dp",
        width: "100dp",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    dresses ? $.addListener($.__views.__alloyId5, "click", dresses) : __defers["$.__views.__alloyId5!click!dresses"] = true;
    $.__views.__alloyId6 = Ti.UI.createLabel({
        text: "Dresses",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "50%",
        top: "60%",
        left: "0%",
        id: "__alloyId7"
    });
    $.__views.categories.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createImageView({
        image: "/trousers.jpg",
        height: "150dp",
        width: "100dp",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    trousers ? $.addListener($.__views.__alloyId8, "click", trousers) : __defers["$.__views.__alloyId8!click!trousers"] = true;
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "Trousers",
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "50%",
        top: "60%",
        right: "0%",
        id: "__alloyId10"
    });
    $.__views.categories.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createImageView({
        image: "/tops.jpg",
        height: "150dp",
        width: "100dp",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    tops ? $.addListener($.__views.__alloyId11, "click", tops) : __defers["$.__views.__alloyId11!click!tops"] = true;
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "Tops",
        id: "__alloyId12"
    });
    $.__views.__alloyId10.add($.__views.__alloyId12);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2!click!jackets"] && $.addListener($.__views.__alloyId2, "click", jackets);
    __defers["$.__views.__alloyId5!click!dresses"] && $.addListener($.__views.__alloyId5, "click", dresses);
    __defers["$.__views.__alloyId8!click!trousers"] && $.addListener($.__views.__alloyId8, "click", trousers);
    __defers["$.__views.__alloyId11!click!tops"] && $.addListener($.__views.__alloyId11, "click", tops);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;