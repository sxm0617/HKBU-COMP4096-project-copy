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
    $.__views.Categories = Ti.UI.createWindow({
        title: "Categories",
        id: "Categories",
        backgroundColor: "white"
    });
    $.__views.Categories && $.addTopLevelView($.__views.Categories);
    $.__views.__alloyId0 = Ti.UI.createImageView({
        image: "/jackets.jpg",
        height: "150dp",
        width: "100dp",
        top: "50dp",
        left: "25dp",
        id: "__alloyId0"
    });
    $.__views.Categories.add($.__views.__alloyId0);
    jackets ? $.addListener($.__views.__alloyId0, "click", jackets) : __defers["$.__views.__alloyId0!click!jackets"] = true;
    $.__views.__alloyId1 = Ti.UI.createImageView({
        image: "/dresses.jpg",
        height: "150dp",
        width: "100dp",
        top: "50dp",
        right: "25dp",
        id: "__alloyId1"
    });
    $.__views.Categories.add($.__views.__alloyId1);
    dresses ? $.addListener($.__views.__alloyId1, "click", dresses) : __defers["$.__views.__alloyId1!click!dresses"] = true;
    $.__views.__alloyId2 = Ti.UI.createImageView({
        image: "/trousers.jpg",
        height: "150dp",
        width: "100dp",
        bottom: "50dp",
        left: "25dp",
        id: "__alloyId2"
    });
    $.__views.Categories.add($.__views.__alloyId2);
    trousers ? $.addListener($.__views.__alloyId2, "click", trousers) : __defers["$.__views.__alloyId2!click!trousers"] = true;
    $.__views.__alloyId3 = Ti.UI.createImageView({
        image: "/tops.jpg",
        height: "150dp",
        width: "100dp",
        bottom: "50dp",
        right: "25dp",
        id: "__alloyId3"
    });
    $.__views.Categories.add($.__views.__alloyId3);
    tops ? $.addListener($.__views.__alloyId3, "click", tops) : __defers["$.__views.__alloyId3!click!tops"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId0!click!jackets"] && $.addListener($.__views.__alloyId0, "click", jackets);
    __defers["$.__views.__alloyId1!click!dresses"] && $.addListener($.__views.__alloyId1, "click", dresses);
    __defers["$.__views.__alloyId2!click!trousers"] && $.addListener($.__views.__alloyId2, "click", trousers);
    __defers["$.__views.__alloyId3!click!tops"] && $.addListener($.__views.__alloyId3, "click", tops);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;