//classes
//class can constain fields, methods, constructor
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    //constructor,used for initializing the values
    function Employee(id, name) {
        this.empId = id;
        this.empName = name;
    }
    Employee.prototype.display = function () {
        console.log("ID: " + this.empId + ", Name: " + this.empName);
    };
    return Employee;
}());
// let emp1 = new Employee(1, "Naveen");
// emp1.display();
var Permanent = /** @class */ (function (_super) {
    __extends(Permanent, _super);
    function Permanent(position, id, name) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    Permanent.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Role: " + this.position + ",ID: " + this.empId + ", Name: " + this.empName);
    };
    return Permanent;
}(Employee));
var emp1 = new Permanent('Developer', 1, "Naveen");
emp1.display();
