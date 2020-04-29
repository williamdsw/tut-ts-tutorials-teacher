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
var Drummer = /** @class */ (function (_super) {
    __extends(Drummer, _super);
    function Drummer(name, band) {
        var _this = _super.call(this, name) || this;
        _this.band = band;
        _this.code = Math.ceil(Math.random() * 100);
        return _this;
    }
    Drummer.prototype.getCode = function () {
        return this.code;
    };
    return Drummer;
}(Musician));
