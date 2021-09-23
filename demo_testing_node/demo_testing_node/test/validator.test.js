const chai=require('chai')
const expect=chai.expect
const validator=require('../validator');


describe("validating isNumberValid()",()=>{
    beforeEach(()=>{
        console.log("testing isNumberValid()");
    });
    it("should return true for a number between 10 and 50",()=>{
        expect(validator.isNumberValid(25)).to.be.true;
    });
    it("should return false for a number is less than 10 ",()=>{
        expect(validator.isNumberValid(5)).to.be.false;
    });
});
