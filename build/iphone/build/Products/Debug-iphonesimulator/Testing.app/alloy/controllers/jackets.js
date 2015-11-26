function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId71(e) {
        if (e && e.fromAdapter) return;
        __alloyId71.opts || {};
        var models = showCatagory(__alloyId70);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId61 = models[i];
            __alloyId61.__transform = addPath(__alloyId61);
            var __alloyId63 = Ti.UI.createTableViewRow({
                layout: "vertical",
                pid: "undefined" != typeof __alloyId61.__transform["id"] ? __alloyId61.__transform["id"] : __alloyId61.get("id")
            });
            rows.push(__alloyId63);
            var __alloyId65 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId61.__transform["imagesWithPath"] ? __alloyId61.__transform["imagesWithPath"] : __alloyId61.get("imagesWithPath"),
                height: "200dp",
                width: "150dp",
                top: "50dp",
                left: "100dp"
            });
            __alloyId63.add(__alloyId65);
            var __alloyId67 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId61.__transform["name"] ? __alloyId61.__transform["name"] : __alloyId61.get("name")
            });
            __alloyId63.add(__alloyId67);
            var __alloyId69 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId61.__transform["price"] ? __alloyId61.__transform["price"] : __alloyId61.get("price")
            });
            __alloyId63.add(__alloyId69);
        }
        $.__views.__alloyId60.setData(rows);
    }
    function showItem(e) {
        var details = Alloy.createController("details", {
            pid: e.row.pid
        });
        Alloy.Globals.tabGroup.activeTab.open(details.getView());
    }
    function showCatagory(collection) {
        return collection.where({
            category: "jackets"
        });
    }
    function addPath(model) {
        var transform = model.toJSON();
        transform.imagesWithPath = "/" + transform.images;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "jackets";
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
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        backgroundColor: "white",
        exitOnClose: "true",
        title: "Jackets"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId60 = Ti.UI.createTableView({
        id: "__alloyId60"
    });
    $.__views.win.add($.__views.__alloyId60);
    var __alloyId70 = Alloy.Collections["items"] || items;
    __alloyId70.on("fetch destroy change add remove reset", __alloyId71);
    showItem ? $.addListener($.__views.__alloyId60, "click", showItem) : __defers["$.__views.__alloyId60!click!showItem"] = true;
    exports.destroy = function() {
        __alloyId70.off("fetch destroy change add remove reset", __alloyId71);
    };
    _.extend($, $.__views);
    Alloy.Collections.items.fetch();
    __defers["$.__views.__alloyId60!click!showItem"] && $.addListener($.__views.__alloyId60, "click", showItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;