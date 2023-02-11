"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Estatus = void 0;
var ISuper_mode_1 = require("./ISuper.mode");
var Estatus = /** @class */ (function (_super) {
    __extends(Estatus, _super);
    function Estatus() {
        var _this = _super.call(this) || this;
        _this._activo = 0;
        return _this;
    }
    Object.defineProperty(Estatus.prototype, "activo", {
        get: function () {
            return this._activo;
        },
        set: function (_activo) {
            this._activo = _activo;
        },
        enumerable: false,
        configurable: true
    });
    return Estatus;
}(ISuper_mode_1.Super));
exports.Estatus = Estatus;
