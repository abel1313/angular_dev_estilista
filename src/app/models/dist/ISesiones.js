"use strict";
exports.__esModule = true;
exports.Sesiones = void 0;
var Sesiones = /** @class */ (function () {
    function Sesiones() {
        this.sesionUsuario = JSON.parse(sessionStorage.getItem('producto'));
        this.sesionCarrito = JSON.parse(sessionStorage.getItem('carritoVenta'));
    }
    Object.defineProperty(Sesiones.prototype, "getSesionUsuario", {
        get: function () {
            return this.sesionUsuario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sesiones.prototype, "getSesionCarrito", {
        get: function () {
            return this.sesionCarrito;
        },
        enumerable: false,
        configurable: true
    });
    return Sesiones;
}());
exports.Sesiones = Sesiones;
