"use strict";
exports.__esModule = true;
exports.ConfigDatatable = void 0;
var ConfigDatatable = /** @class */ (function () {
    function ConfigDatatable() {
    }
    ConfigDatatable.dtOptions = {
        pagingType: 'full_numbers',
        retrieve: true,
        pageLength: 5,
        responsive: true,
        language: {
            url: './assets/config/DataTable.json'
        }
    };
    return ConfigDatatable;
}());
exports.ConfigDatatable = ConfigDatatable;
