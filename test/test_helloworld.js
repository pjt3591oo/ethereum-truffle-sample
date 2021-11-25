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

    // 컨트랙트에서 에러 발생 시 catch 에서 에러 메시지를 받은 후 처리
    try {
      await this.instance.errorOccur(0, {from: accounts[0]})
    } catch ({message}) {
      const ERROR_BASE_MSG = "Returned error: VM Exception while processing transaction: revert "
      assert.include(message, `${ERROR_BASE_MSG}${"hello world error"}`);
    }

  });
})