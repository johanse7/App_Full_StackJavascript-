const app = require('../index'),
  chai = require('chai'),
  request = require('supertest');

  const expect = chai.expect;

  describe('# Get process text', function() { 
    it('process by query param', function(done) { 
      request(app) .get('/api/processText/my text') .end(function(err, res) { 
        expect(res.statusCode).to.equal(200); 
        expect(res.body.text).to.equal('my text');
        done(); 
      }); 
    }); 
  }); 