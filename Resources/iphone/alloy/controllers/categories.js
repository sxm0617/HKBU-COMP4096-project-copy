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
        Alloy.createController("jackets");
        $.index.activeTab.open(dresses.getView());
    }
    function dresses() {
        var dresses = Alloy.createController("dresses");
        $.index.activeTab.open(dresses.getView());
    }
    function trousers() {
        var trousers = Alloy.createController("trousers");
        $.index.activeTab.open(trousers.getView());
    }
    function tops() {
        var tops = Alloy.createController("tops");
        $.index.activeTab.open(tops.getView());
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
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        backgroundColor: "white",
        exitOnClose: "true",
        fullscreen: "true",
        title: "ScrollView Demo"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true",
        height: "80%",
        width: "100%"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.view = Ti.UI.createView({
        id: "view",
        backgroundColor: "#336699",
        top: "10",
        height: "2000",
        width: "100%"
    });
    $.__views.scrollView.add($.__views.view);
    $.__views.__alloyId0 = Ti.UI.createImageView({
        image: "/dresses.jpg",
        height: "200",
        width: "150",
        top: "20dp",
        left: "20dp",
        id: "__alloyId0"
    });
    $.__views.scrollView.add($.__views.__alloyId0);
    dresses ? $.addListener($.__views.__alloyId0, "click", dresses) : __defers["$.__views.__alloyId0!click!dresses"] = true;
    $.__views.__alloyId1 = Ti.UI.createImageView({
        image: "/jackets.jpg",
        height: "200",
        width: "150",
        top: "20dp",
        left: "200dp",
        id: "__alloyId1"
    });
    $.__views.scrollView.add($.__views.__alloyId1);
    jackets ? $.addListener($.__views.__alloyId1, "click", jackets) : __defers["$.__views.__alloyId1!click!jackets"] = true;
    $.__views.__alloyId2 = Ti.UI.createImageView({
        image: "/tops.jpg",
        height: "200",
        width: "150",
        top: "250dp",
        left: "20dp",
        id: "__alloyId2"
    });
    $.__views.scrollView.add($.__views.__alloyId2);
    tops ? $.addListener($.__views.__alloyId2, "click", tops) : __defers["$.__views.__alloyId2!click!tops"] = true;
    $.__views.__alloyId3 = Ti.UI.createImageView({
        image: "/trousers.jpg",
        height: "200",
        width: "150",
        top: "250dp",
        left: "200dp",
        id: "__alloyId3"
    });
    $.__views.scrollView.add($.__views.__alloyId3);
    trousers ? $.addListener($.__views.__alloyId3, "click", trousers) : __defers["$.__views.__alloyId3!click!trousers"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId0!click!dresses"] && $.addListener($.__views.__alloyId0, "click", dresses);
    __defers["$.__views.__alloyId1!click!jackets"] && $.addListener($.__views.__alloyId1, "click", jackets);
    __defers["$.__views.__alloyId2!click!tops"] && $.addListener($.__views.__alloyId2, "click", tops);
    __defers["$.__views.__alloyId3!click!trousers"] && $.addListener($.__views.__alloyId3, "click", trousers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;