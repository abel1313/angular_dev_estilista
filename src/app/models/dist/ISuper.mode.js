"use strict";
exports.__esModule = true;
exports.Super = void 0;
var Super = /** @class */ (function () {
    function Super() {
        this._id = 0;
    }
    Object.defineProperty(Super.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (_id) {
            this._id = _id;
        },
        enumerable: false,
        configurable: true
    });
    return Super;
}());
exports.Super = Super;
