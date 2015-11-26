function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId19(e) {
        if (e && e.fromAdapter) return;
        __alloyId19.opts || {};
        var models = showDetails(__alloyId18);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId7 = models[i];
            __alloyId7.__transform = {};
            var __alloyId9 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            rows.push(__alloyId9);
            var __alloyId11 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId7.__transform["images"] ? __alloyId7.__transform["images"] : __alloyId7.get("images")
            });
            __alloyId9.add(__alloyId11);
            var __alloyId13 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId7.__transform["name"] ? __alloyId7.__transform["name"] : __alloyId7.get("name")
            });
            __alloyId9.add(__alloyId13);
            var __alloyId15 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId7.__transform["price"] ? __alloyId7.__transform["price"] : __alloyId7.get("price")
            });
            __alloyId9.add(__alloyId15);
            var __alloyId17 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId7.__transform["info"] ? __alloyId7.__transform["info"] : __alloyId7.get("info")
            });
            __alloyId9.add(__alloyId17);
        }
        $.__views.__alloyId6.setData(rows);
    }
    function showDetails(collection) {
        return collection.where({
            id: args.pid
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "details";
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
    Alloy.Collections.instance("items");
    $.__views.details = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "details"
    });
    $.__views.details && $.addTopLevelView($.__views.details);
    $.__views.__alloyId6 = Ti.UI.createTableView({
        id: "__alloyId6"
    });
    $.__views.details.add($.__views.__alloyId6);
    var __alloyId18 = Alloy.Collections["items"] || items;
    __alloyId18.on("fetch destroy change add remove reset", __alloyId19);
    exports.destroy = function() {
        __alloyId18.off("fetch destroy change add remove reset", __alloyId19);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    console.log(args.pid);
    Alloy.Collections.items.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;