const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const  User  = require("../app/models/User");
const userRepository = require("../app/repositories/UserRepository");
describe("userRepository", function() {
  const stubValue = {
    id: "rhwhrwlowe;'ejkerre;",
    firstName: "precious",
    lastName: "Agamuyi",
    password: "maintain",
    email: "agamuyirex63@gmail.com",
    role:"user",
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  describe("create user", function() {
    it(" it should add a new user to the db", async function() {
      const stub = sinon.stub(User, "create").returns(stubValue);
      const user = await userRepository.create(stubValue.firstName, stubValue.lastName,stubValue.email, stubValue.password, stubValue.role);
      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.firstName).to.equal(stubValue.firstName);
      expect(user.lastName).to.equal(stubValue.lastName);
      expect(user.email).to.equal(stubValue.email);
      expect(user.password).to.equal(stubValue.password);
      expect(user.role).to.equal(stubValue.role);
      expect(user.createdAt).to.equal(stubValue.createdAt);
      expect(user.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
});
describe("userRepository", function() {
    const stubValue = {
      id: "rhwhrwlowe;'ejkerre;",
      firstName: "precious",
      lastName: "Agamuyi",
      password: "maintain",
      email: "agamuyirex63@gmail.com",
      role:"user",
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
describe("getUser", function() {
    it(" it should retrieve a user with specific id", async function() {
      const stub = sinon.stub(User, "findOne").returns(stubValue);
      const user = await userRepository.findOne(stubValue.id);
      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.firstName).to.equal(stubValue.firstName);
      expect(user.lastName).to.equal(stubValue.lastName);
      expect(user.email).to.equal(stubValue.email);
      expect(user.password).to.equal(stubValue.password);
      expect(user.role).to.equal(stubValue.role);
      expect(user.createdAt).to.equal(stubValue.createdAt);
      expect(user.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
});
describe("userRepository", function() {
    const stubValue = {
      id: "rhwhrwlowe;'ejkerre;",
      firstName: "precious",
      lastName: "Agamuyi",
      password: "maintain",
      email: "agamuyirex63@gmail.com",
      role:"user",
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
describe("fetch users", function() {
    it(" it should retrieve all  users", async function() {
      const stub = sinon.stub(User, "findAll").returns(stubValue);
      const user = await userRepository.findAll(stubValue);
      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.firstName).to.equal(stubValue.firstName);
      expect(user.lastName).to.equal(stubValue.lastName);
      expect(user.email).to.equal(stubValue.email);
      expect(user.password).to.equal(stubValue.password);
      expect(user.role).to.equal(stubValue.role);
      expect(user.createdAt).to.equal(stubValue.createdAt);
      expect(user.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
});
describe("userRepository", function() {
    const stubValue = {
      id: "rhwhrwlowe;'ejkerre;",
      firstName: "precious",
      lastName: "Agamuyi",
      password: "maintain",
      email: "agamuyirex63@gmail.com",
      role:"user",
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
describe("update user", function() {
    it(" it should update a user with specific id", async function() {
      const stub = sinon.stub(User, "update").returns(stubValue);
      const user = await userRepository.update(stubValue.id);
      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.firstName).to.equal(stubValue.firstName);
      expect(user.lastName).to.equal(stubValue.lastName);
      expect(user.email).to.equal(stubValue.email);
      expect(user.password).to.equal(stubValue.password);
      expect(user.role).to.equal(stubValue.role);
      expect(user.createdAt).to.equal(stubValue.createdAt);
      expect(user.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
});
describe("userRepository", function() {
    const stubValue = {
      id: "rhwhrwlowe;'ejkerre;",
      firstName: "precious",
      lastName: "Agamuyi",
      password: "maintain",
      email: "agamuyirex63@gmail.com",
      role:"user",
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
describe("delete user", function() {
    it(" it should delete a user with specific id", async function() {
      const stub = sinon.stub(User, "destroy").returns(stubValue);
      const user = await userRepository.destroy(stubValue.id);
      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.firstName).to.equal(stubValue.firstName);
      expect(user.lastName).to.equal(stubValue.lastName);
      expect(user.email).to.equal(stubValue.email);
      expect(user.password).to.equal(stubValue.password);
      expect(user.role).to.equal(stubValue.role);
      expect(user.createdAt).to.equal(stubValue.createdAt);
      expect(user.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
});
