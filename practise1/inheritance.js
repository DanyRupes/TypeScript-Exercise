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
var eVerification = /** @class */ (function () {
    function eVerification(aadhar) {
        this.aadhar = aadhar;
        this.esign = 'StringE';
        this.photo = 'StringP';
    }
    eVerification.prototype.getEsign = function () { return { esign: this.esign, photo: this.photo }; };
    return eVerification;
}());
var PAN = /** @class */ (function (_super) {
    __extends(PAN, _super);
    function PAN(aadhar, firstName, middleName, lastName) {
        var _this = _super.call(this, aadhar) || this;
        _this.firstName = firstName;
        _this.middleName = middleName;
        _this.lastName = lastName;
        return _this;
    }
    PAN.prototype.getmyEsign = function () {
        return _super.prototype.getEsign.call(this);
    };
    return PAN;
}(eVerification));
var verifyPAN = new PAN('1234567891234', 'myFirstName', 'myMidName', 'MyLastNamr');
console.log(verifyPAN.getmyEsign());
document.body.textContent = "See console";
