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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    // CONSTRUCTOR
    function Employee(name, code) {
        var _this = _super.call(this, name) || this;
        _this.code = code;
        return _this;
    }
    // OVERRIDED FUNCTIONS
    Employee.prototype.find = function (name) {
        return new Employee(name, 1);
    };
    return Employee;
}(Person));
