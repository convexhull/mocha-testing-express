var app = require('./server').app;
const expect = require('expect');
const supertest = require('supertest');

describe('GET /', () => {
    it('should return an html', (done) => {
        supertest(app)
            .get('/')
            .expect(201)
            .expect( (res) => {
                expect(res.body).toInclude({"error" : "noooo"});
            })
            .end(done);
    });
});

describe('GET /users', () => {
    it('should be all fine' , (done) => {
        supertest(app)
            .get('/users')
            .expect(200)
            .expect( (res) => {
                expect(res.body).toInclude({"name":"yash", "age": 21});
            })
            .end(done);
    })
})

