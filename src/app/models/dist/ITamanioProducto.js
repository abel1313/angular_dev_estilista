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
exports.TamanioProducto = void 0;
var ISuper_mode_1 = require("./ISuper.mode");
var TamanioProducto = /** @class */ (function (_super) {
    __extends(TamanioProducto, _super);
    function TamanioProducto() {
        var _this = _super.call(this) || this;
        _this._tipoPieza = '';
        _this._precioPieza = 0;
        return _this;
    }
    Object.defineProperty(TamanioProducto.prototype, "setTipoPieza", {
        set: function (_tipoPieza) {
            this._tipoPieza = _tipoPieza;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TamanioProducto.prototype, "getTipoPieza", {
        get: function () {
            return this._tipoPieza;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TamanioProducto.prototype, "setPrecioPieza", {
        set: function (_precioPieza) {
            this._precioPieza = _precioPieza;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TamanioProducto.prototype, "getPrecioPieza", {
        get: function () {
            return this._precioPieza;
        },
        enumerable: false,
        configurable: true
    });
    return TamanioProducto;
}(ISuper_mode_1.Super));
exports.TamanioProducto = TamanioProducto;
