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
    this.__controllerPath = "about";
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
    $.__views.about = Ti.UI.createWindow({
        title: "About Us",
        backgroundColor: "white",
        id: "about"
    });
    $.__views.about && $.addTopLevelView($.__views.about);
    $.__views.__alloyId0 = Ti.UI.createTextArea({
        value: "Are you tired of always ordering the wrong size online? Don't worry any longer! One-Size Shop offers clothes in solely one size! If it fit it fits, if it doesn't, well.. than it simply doesn't! You can return your items within 30 days of the day of recieving your order. We ship world-wide!",
        font: "",
        id: "__alloyId0"
    });
    $.__views.about.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;