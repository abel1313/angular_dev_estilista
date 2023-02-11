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
exports.Producto = void 0;
var IEstatus_1 = require("./IEstatus");
var ISuper_mode_1 = require("./ISuper.mode");
var ITamanioProducto_1 = require("./ITamanioProducto");
var Producto = /** @class */ (function (_super) {
    __extends(Producto, _super);
    function Producto() {
        var _this = _super.call(this) || this;
        _this._nombreProducto = '';
        _this._tamanoProducto = new ITamanioProducto_1.TamanioProducto();
        _this._estatusPieza = new IEstatus_1.Estatus();
        return _this;
    }
    Object.defineProperty(Producto.prototype, "nombreProducto", {
        get: function () {
            return this._nombreProducto;
        },
        set: function (_nombreProducto) {
            this._nombreProducto = _nombreProducto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "tamanoProducto", {
        get: function () {
            return this._tamanoProducto;
        },
        set: function (_tamanoProducto) {
            this._tamanoProducto = _tamanoProducto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "estatusPieza", {
        get: function () {
            return this._estatusPieza;
        },
        set: function (_estatusPieza) {
            this._estatusPieza = _estatusPieza;
        },
        enumerable: false,
        configurable: true
    });
    return Producto;
}(ISuper_mode_1.Super));
exports.Producto = Producto;
