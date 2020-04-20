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
var Guitarrist = /** @class */ (function (_super) {
    __extends(Guitarrist, _super);
    function Guitarrist(code, name, guitarModel) {
        var _this = _super.call(this, code, name) || this;
        _this.guitarModel = guitarModel;
        return _this;
    }
    Guitarrist.prototype.display = function () {
        console.log('Guitarrist guitar model =', this.guitarModel);
    };
    return Guitarrist;
}(Musician));
