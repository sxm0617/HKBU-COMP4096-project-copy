function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId80(e) {
        if (e && e.fromAdapter) return;
        __alloyId80.opts || {};
        var models = __alloyId79.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId68 = models[i];
            __alloyId68.__transform = {};
            var __alloyId70 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            rows.push(__alloyId70);
            var __alloyId72 = Ti.UI.createTextArea({
                font: "",
                textAlign: "left",
                width: "150dp",
                left: "20dp",
                value: "undefined" != typeof __alloyId68.__transform["item_name"] ? __alloyId68.__transform["item_name"] : __alloyId68.get("item_name")
            });
            __alloyId70.add(__alloyId72);
            var __alloyId74 = Ti.UI.createTextArea({
                font: "",
                textAlign: "center",
                width: "12dp",
                left: "50dp",
                value: "undefined" != typeof __alloyId68.__transform["item_number"] ? __alloyId68.__transform["item_number"] : __alloyId68.get("item_number")
            });
            __alloyId70.add(__alloyId74);
            var __alloyId76 = Ti.UI.createTextArea({
                font: "",
                textAlign: "right",
                width: "50dp",
                left: "50dp",
                value: "undefined" != typeof __alloyId68.__transform["total_price"] ? __alloyId68.__transform["total_price"] : __alloyId68.get("total_price")
            });
            __alloyId70.add(__alloyId76);
            var __alloyId78 = Ti.UI.createButton({
                title: "Delete",
                textAlign: "center",
                left: "85%",
                cid: "undefined" != typeof __alloyId68.__transform["id"] ? __alloyId68.__transform["id"] : __alloyId68.get("id")
            });
            __alloyId70.add(__alloyId78);
            deleteOne ? $.addListener(__alloyId78, "click", deleteOne) : __defers["__alloyId78!click!deleteOne"] = true;
        }
        $.__views.__alloyId67.setData(rows);
    }
    function categories() {
        var categories = Alloy.createController("categories");
        $.index.activeTab.open(categories.getView());
    }
    function about() {
        var about = Alloy.createController("about");
        Alloy.Globals.tabGroup.activeTab.open(about.getView());
    }
    function deleteAll() {
        var numberOfItem = cartObject.length;
        if (numberOfItem > 0) for (var i = 0; numberOfItem > i; i++) {
            var model = cartObject.at(0);
            model.destroy();
        } else alert("The cart is already empty now!");
    }
    function deleteOne(e) {
        var firstModel = cartObject.get(e.source.cid);
        firstModel.destroy();
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
    var __alloyId49 = [];
    $.__views.__alloyId51 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Home Page",
        id: "__alloyId51"
    });
    var __alloyId53 = [];
    $.__views.__alloyId54 = Ti.UI.createTableViewRow({
        id: "__alloyId54"
    });
    __alloyId53.push($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        height: "80%",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createImageView({
        image: "/shopnow.png",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    categories ? $.addListener($.__views.__alloyId56, "click", categories) : __defers["$.__views.__alloyId56!click!categories"] = true;
    $.__views.__alloyId57 = Ti.UI.createTableViewRow({
        id: "__alloyId57"
    });
    __alloyId53.push($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: "17%",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    about ? $.addListener($.__views.__alloyId58, "click", about) : __defers["$.__views.__alloyId58!click!about"] = true;
    $.__views.__alloyId59 = Ti.UI.createTextField({
        value: "One-Size Shop",
        editable: "false",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId52 = Ti.UI.createTableView({
        data: __alloyId53,
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId50 = Ti.UI.createTab({
        window: $.__views.__alloyId51,
        title: "Home",
        icon: "KS_nav_ui.png",
        id: "__alloyId50"
    });
    __alloyId49.push($.__views.__alloyId50);
    $.__views.__alloyId61 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "My Cart",
        id: "__alloyId61"
    });
    $.__views.__alloyId62 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createTextArea({
        font: "",
        textAlign: "left",
        width: "100dp",
        left: "20dp",
        value: "Item Name",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createTextArea({
        font: "",
        textAlign: "center",
        width: "62dp",
        left: "73dp",
        value: "Number",
        id: "__alloyId64"
    });
    $.__views.__alloyId62.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createTextArea({
        font: "",
        textAlign: "right",
        width: "78dp",
        left: "0dp",
        value: "Total Price",
        id: "__alloyId65"
    });
    $.__views.__alloyId62.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createButton({
        title: "Delete All",
        textAlign: "center",
        left: "70%",
        id: "__alloyId66"
    });
    $.__views.__alloyId62.add($.__views.__alloyId66);
    deleteAll ? $.addListener($.__views.__alloyId66, "click", deleteAll) : __defers["$.__views.__alloyId66!click!deleteAll"] = true;
    $.__views.__alloyId67 = Ti.UI.createTableView({
        width: "90%",
        id: "__alloyId67"
    });
    $.__views.__alloyId62.add($.__views.__alloyId67);
    var __alloyId79 = Alloy.Collections["cart"] || cart;
    __alloyId79.on("fetch destroy change add remove reset", __alloyId80);
    $.__views.__alloyId60 = Ti.UI.createTab({
        window: $.__views.__alloyId61,
        title: "Cart",
        icon: "/cart.png",
        id: "__alloyId60"
    });
    __alloyId49.push($.__views.__alloyId60);
    $.__views.__alloyId82 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Contact Us",
        id: "__alloyId82"
    });
    var __alloyId84 = [];
    $.__views.__alloyId85 = Ti.UI.createTableViewRow({
        id: "__alloyId85"
    });
    __alloyId84.push($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createTextArea({
        left: "10dp",
        backgroundColor: "transparent",
        value: "Eline Saarloos\nStudent number: 15501701\nCountry: Netherlands\nPhone: 5244 9691\nEmail: 15501701@life.hkbu.edu.hk",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createImageView({
        image: "/Eline.png",
        height: "120dp",
        width: "120dp",
        right: "10dp",
        id: "__alloyId88"
    });
    $.__views.__alloyId86.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createTableViewRow({
        id: "__alloyId89"
    });
    __alloyId84.push($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createImageView({
        image: "/SunXiaomeng.jpg",
        height: "120dp",
        width: "120dp",
        left: "10dp",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createTextArea({
        left: "10dp",
        backgroundColor: "transparent",
        value: "Sun Xiaomeng\nStudent number: 12251216\nCountry: China\nPhone: 5612 7210\nEmail: 12251216@life.hkbu.edu.hk",
        id: "__alloyId92"
    });
    $.__views.__alloyId90.add($.__views.__alloyId92);
    $.__views.__alloyId83 = Ti.UI.createTableView({
        data: __alloyId84,
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId81 = Ti.UI.createTab({
        window: $.__views.__alloyId82,
        title: "Contact Us",
        icon: "/contact.png",
        id: "__alloyId81"
    });
    __alloyId49.push($.__views.__alloyId81);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId49,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId79.off("fetch destroy change add remove reset", __alloyId80);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.Collections.items.fetch();
    Alloy.Collections.cart.fetch();
    var cartObject = Alloy.Collections.cart;
    Alloy.Globals.tabGroup = $.index;
    __defers["$.__views.__alloyId56!click!categories"] && $.addListener($.__views.__alloyId56, "click", categories);
    __defers["$.__views.__alloyId58!click!about"] && $.addListener($.__views.__alloyId58, "click", about);
    __defers["$.__views.__alloyId66!click!deleteAll"] && $.addListener($.__views.__alloyId66, "click", deleteAll);
    __defers["__alloyId78!click!deleteOne"] && $.addListener(__alloyId78, "click", deleteOne);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;