function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    $.__views.__alloyId4 = Ti.UI.createImageView({
        image: "/dresses.jpg",
        height: "200",
        width: "150",
        top: "20dp",
        left: "20dp",
        id: "__alloyId4"
    });
    $.__views.scrollView.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;