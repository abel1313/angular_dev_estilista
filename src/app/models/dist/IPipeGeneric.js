"use strict";
exports.__esModule = true;
exports.PipeGeneric = void 0;
var PipeGeneric = /** @class */ (function () {
    function PipeGeneric() {
    }
    PipeGeneric.convertFecha = function (valor) {
        var numero = Number(valor);
        if (isNaN(numero)) {
            return '00';
        }
        if (numero >= 0 && numero < 10) {
            return "0" + numero;
        }
        if (valor == '') {
            return '00';
        }
        return valor;
    };
    return PipeGeneric;
}());
exports.PipeGeneric = PipeGeneric;
