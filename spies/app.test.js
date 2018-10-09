const expect = require('expect');
const rewire = require('rewire');
var app = rewire('./app');


describe('App', () => {

    var spyObj = {
        saveUser : expect.createSpy()
    }

    app.__set__('db',spyObj);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Yash',25);
        expect(spy).toHaveBeenCalledWith('Yash',25);
    });

    it('should call saveUser correctly', () => {
        var email = 'singhyashpratap06@gmail.com';
        var password = '123abc';

        app.handleSignup(email,password);
        expect(spyObj.saveUser).toHaveBeenCalledWith({email, password});
    });
});