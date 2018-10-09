const expect = require('expect');

const utils = require('./utils');


describe('Utils', () => {

it('should add two numbers' ,() => {
    var res = utils.add(33,11);
    
    expect(res).toBe(44).toBeA('number');
    // if(res!==44){
    //     throw new Error(`Expected 44 but got ${res}`);
    // }
});    



it('should async add two numbers', (done) => {
    var ans;
    utils.asyncAdd(3,7,(sum) => {
        expect(sum).toBeA('number').toBe(10);
        ans = sum;
        done();
    });   
})

it('should async square a number', (done) => {
    utils.asyncSquare(9,(ans) => {
        expect(ans).toBeA('number').toBe(81);
        done();
    });
});


it('should square the number', () => {
    var res = utils.square(3);
    expect(res).toBeA('number').toBe(9);

});

it('should verify first name and last name set', () => {
    var user = {
        age : 21,
        likes : 'mountains'
    }
    var name = "Yash Pratap";
    user = utils.setName(user, name);
    expect(user).toInclude({
        firstName : 'Yash',
        lastName : 'Pratap'
    });
});
})


// it('should  expect some values' , () => {
//     // expect(12).toNotBe(121);
//     // expect({name : 'Yash'}).toNotEqual({name : 'Yash'});
//     expect([2,6,9,3,4]).toInclude(2).toInclude(4);
// })