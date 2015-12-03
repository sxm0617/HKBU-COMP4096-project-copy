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
        editable: "false",
        value: "The app is just for the view of jackets, dresses, tops and trousers. We can also give the price for you to judge whether it is worth. However, we do not supply the function of buying. If you like some of our products, you can contact us through email or phone. Our information is shown in the 'Contact Us' interface. Wish you having a good time in our store!",
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