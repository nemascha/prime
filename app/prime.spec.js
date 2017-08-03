describe('Test prime file', function() {

    var module = require('./prime.js')

    // формальная проверка на тип возвращаемой переменной
    it('Function loaded', function () {
        expect(module.isPrime).to.be.an('Function');
    });

    it('test for 1', function () {
        expect(module.isPrime(1)).to.be.false;
    });

    it('test for 2', function () {
        expect(module.isPrime(2)).to.be.true;
    });

    it('test for 37', function () {
        expect(module.isPrime(37)).to.be.true;
    });

    it('test for 1000000', function () {
        expect(module.isPrime(33)).to.be.false;
    });

    it('test for 797003413', function () {
        expect(module.isPrime(797003413)).to.be.true;
    });

    it('test for 982451653', function () {
        expect(module.isPrime(982451653)).to.be.true;
    });
});