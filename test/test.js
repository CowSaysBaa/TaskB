//let mongoose = require("mongoose");
//let Turtle = require('../turtleModel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Turtles', () => {
  beforeEach((done) => { //Before each test we empty the database
    Turtle.remove({}, (err) => {
      done();
    });
  });
  /*
    * Test the /GET route
    */
  describe('/GET turtle', () => {
    it('it should GET all the turtles', (done) => {
      chai.request(server)
        .get('/api/turtles')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.be.a('array');
          res.body.data.length.should.be.eql(0);
          res.body.should.have.property('message').eql('Turtles retrieved successfully');
          done();
        });
    });
  });

  /*
   * Test the /GET/:id route
   */
  describe('/GET/:turtle_id turtle', () => {
    it('it should GET a turtle by the given id', (done) => {
      let turtle = new Turtle({ species: "a small turtle", location: "a small place" });
      turtle.save((err, turtle) => {
        chai.request(server)
          .get('/api/turtles/' + turtle.id)
          .send(turtle)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.should.have.property('species');
            res.body.data.should.have.property('location');
            res.body.data.should.have.property('_id').eql(turtle.id);
            res.body.should.have.property('message').eql('Turtle details loading..');
            done();
          });
      });

    });
  });

  /*
  * Test the /POST route
  */
  describe('/POST turtle', () => {
    it('it should POST a turtle ', (done) => {
      let turtle = {
        species: "a giant turtle",
        location: "a giant place"
      }
      chai.request(server)
        .post('/api/turtles')
        .send(turtle)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('New turtle created!');
          res.body.data.should.have.property('species');
          res.body.data.should.have.property('location');
          done();
        });
    });
  });

  /*
   * Test the /PUT/:id route
   */
  describe('/PUT/:turtle_id turtle', () => {
    it('it should UPDATE a turtle given the id', (done) => {
      let turtle = new Turtle({ species: "a happy turtle", location: "a happy place" });
      turtle.save((err, turtle) => {
        chai.request(server)
          .put('/api/turtles/' + turtle.id)
          .send({ species: "a sad turtle", location: "a sad place" })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('turtle Info updated');
            res.body.data.should.have.property('species').eql("a sad turtle");
            res.body.data.should.have.property('location').eql("a sad place");
            done();
          });
      });
    });
  });

  /*
   * Test the /DELETE/:id route
   */
  describe('/DELETE/:turtle_id turtle', () => {
    it('it should DELETE a turtle given the id', (done) => {
      let turtle = new Turtle({ species: "a deleted turtle", location: "a deleted place" });
      turtle.save((err, turtle) => {
        chai.request(server)
          .delete('/api/turtles/' + turtle.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('turtle deleted');
            done();
          });
      });
    });
  });

});

