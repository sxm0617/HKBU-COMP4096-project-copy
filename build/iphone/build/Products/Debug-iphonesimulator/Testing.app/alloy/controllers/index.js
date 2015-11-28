function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId85(e) {
        if (e && e.fromAdapter) return;
        __alloyId85.opts || {};
        var models = __alloyId84.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId67 = models[i];
            __alloyId67.__transform = {};
            var __alloyId69 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            rows.push(__alloyId69);
            var __alloyId71 = Ti.UI.createTextArea({
                font: "",
                textAlign: "left",
                width: "100dp",
                left: "20dp",
                value: "Item Name"
            });
            __alloyId69.add(__alloyId71);
            var __alloyId73 = Ti.UI.createTextArea({
                font: "",
                textAlign: "center",
                width: "62dp",
                left: "73dp",
                value: "Number"
            });
            __alloyId69.add(__alloyId73);
            var __alloyId75 = Ti.UI.createTextArea({
                font: "",
                textAlign: "right",
                width: "78dp",
                left: "0dp",
                value: "Total Price"
            });
            __alloyId69.add(__alloyId75);
            var __alloyId77 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            rows.push(__alloyId77);
            var __alloyId79 = Ti.UI.createTextArea({
                font: "",
                textAlign: "left",
                width: "150dp",
                left: "20dp",
                value: "undefined" != typeof __alloyId67.__transform["item name"] ? __alloyId67.__transform["item name"] : __alloyId67.get("item name")
            });
            __alloyId77.add(__alloyId79);
            var __alloyId81 = Ti.UI.createTextArea({
                font: "",
                textAlign: "center",
                width: "10dp",
                left: "50dp",
                value: "undefined" != typeof __alloyId67.__transform["item number"] ? __alloyId67.__transform["item number"] : __alloyId67.get("item number")
            });
            __alloyId77.add(__alloyId81);
            var __alloyId83 = Ti.UI.createTextArea({
                font: "",
                textAlign: "right",
                width: "50dp",
                left: "50dp",
                value: "undefined" != typeof __alloyId67.__transform["total price"] ? __alloyId67.__transform["total price"] : __alloyId67.get("total price")
            });
            __alloyId77.add(__alloyId83);
        }
        $.__views.__alloyId66.setData(rows);
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
    Alloy.Collections.instance("cart");
    var __alloyId47 = [];
    $.__views.__alloyId49 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Home Page",
        id: "__alloyId49"
    });
    var __alloyId51 = [];
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        id: "__alloyId52"
    });
    __alloyId51.push($.__views.__alloyId52);
    $.__views.view = Ti.UI.createView({
        id: "view",
        height: "50%"
    });
    $.__views.__alloyId52.add($.__views.view);
    $.__views.homeImage = Ti.UI.createImageView({
        id: "homeImage",
        image: "/shopnow.png"
    });
    $.__views.view.add($.__views.homeImage);
    categories ? $.addListener($.__views.homeImage, "click", categories) : __defers["$.__views.homeImage!click!categories"] = true;
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
        id: "__alloyId53"
    });
    __alloyId51.push($.__views.__alloyId53);
    $.__views.view = Ti.UI.createView({
        id: "view",
        height: "50%"
    });
    $.__views.__alloyId53.add($.__views.view);
    $.__views.__alloyId54 = Ti.UI.createTextField({
        value: "One-Size Shop",
        editable: "false",
        id: "__alloyId54"
    });
    $.__views.view.add($.__views.__alloyId54);
    $.__views.__alloyId50 = Ti.UI.createTableView({
        data: __alloyId51,
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId48 = Ti.UI.createTab({
        window: $.__views.__alloyId49,
        title: "Home",
        icon: "KS_nav_ui.png",
        id: "__alloyId48"
    });
    __alloyId47.push($.__views.__alloyId48);
    $.__views.__alloyId56 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "About Us",
        id: "__alloyId56"
    });
    $.__views.__alloyId57 = Ti.UI.createTextArea({
        value: "Are you tired of always ordering the wrong size online? Don't worry any longer! One-Size Shop offers clothes in solely one size! If it fit it fits, if it doesn't, well.. than it simply doesn't! You can return your items within 30 days of the day of recieving your order. We ship world-wide!",
        font: "",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId55 = Ti.UI.createTab({
        window: $.__views.__alloyId56,
        title: "About Us",
        icon: "/info.png",
        id: "__alloyId55"
    });
    __alloyId47.push($.__views.__alloyId55);
    $.__views.__alloyId59 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Contact Us",
        id: "__alloyId59"
    });
    var __alloyId61 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId61.push($.__views.row);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "horizontal",
        height: "50%"
    });
    $.__views.row.add($.__views.view);
    $.__views.__alloyId62 = Ti.UI.createTextArea({
        left: "10dp",
        backgroundColor: "transparent",
        value: "Eline Saarloos\nStudent number: 15501701\nCountry: Netherlands\nPhone: 5244 9691\nEmail: 15501701@life.hkbu.edu.hk",
        id: "__alloyId62"
    });
    $.__views.view.add($.__views.__alloyId62);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/Eline.png",
        height: "120dp",
        width: "120dp",
        right: "10dp"
    });
    $.__views.view.add($.__views.image);
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId61.push($.__views.row);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "horizontal",
        height: "50%"
    });
    $.__views.row.add($.__views.view);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/SunXiaomeng.jpg",
        height: "120dp",
        width: "120dp",
        left: "10dp"
    });
    $.__views.view.add($.__views.image);
    $.__views.__alloyId63 = Ti.UI.createTextArea({
        left: "10dp",
        backgroundColor: "transparent",
        value: "Sun Xiaomeng\nStudent number: 12251216\nCountry: China\nPhone: 5612 7210\nEmail: 12251216@life.hkbu.edu.hk",
        id: "__alloyId63"
    });
    $.__views.view.add($.__views.__alloyId63);
    $.__views.__alloyId60 = Ti.UI.createTableView({
        data: __alloyId61,
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId58 = Ti.UI.createTab({
        window: $.__views.__alloyId59,
        title: "Contact Us",
        icon: "/contact.png",
        id: "__alloyId58"
    });
    __alloyId47.push($.__views.__alloyId58);
    $.__views.__alloyId65 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "My Cart",
        id: "__alloyId65"
    });
    $.__views.__alloyId66 = Ti.UI.createTableView({
        width: "90%",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    var __alloyId84 = Alloy.Collections["cart"] || cart;
    __alloyId84.on("fetch destroy change add remove reset", __alloyId85);
    $.__views.__alloyId64 = Ti.UI.createTab({
        window: $.__views.__alloyId65,
        title: "Cart",
        icon: "/cart.png",
        id: "__alloyId64"
    });
    __alloyId47.push($.__views.__alloyId64);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId47,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId84.off("fetch destroy change add remove reset", __alloyId85);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.Collections.items.fetch();
    Alloy.Collections.cart.fetch();
    Alloy.Globals.tabGroup = $.index;
    __defers["$.__views.homeImage!click!categories"] && $.addListener($.__views.homeImage, "click", categories);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;