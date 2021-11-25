// truffle-assertions는 npm을 이용하여 설치한다
// npm install --save truffle-assertions
const truffleAssert = require('truffle-assertions');
const helloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", accounts => {
  before(async () => {
    this.instance = await helloWorld.deployed();
  })

  it("should be initialized with correct value", async () => {
    const greeting = await this.instance.greeting();

    assert.equal(greeting, "Hello World!!", "Wrong initialized value!");
  });

  it("should change the greeting", async () => {
    const val = '1';

    // 상태를 바꾸는 함수는 계정이 필요하다
    await this.instance.setGreeting(val, {from: accounts[0]});
    const greeting = await this.instance.say();
    // AssertionError(false);
    assert.equal(greeting, val, "dose not change the value!");
  });

  it("should throw exception", async () => {
    await truffleAssert.reverts(
      this.instance.errorOccur(0, {from: accounts[0]}),
      "hello world error"
    )
  });
})