const truffleAssert = require('truffle-assertions');
const Mung = artifacts.require("Mung");

contract("Mung", accounts => {
 // 각각의 테스트 케이스인 it을 실행할 때마다 before 실행하여 스마트 컨트랙트 객체를 가져옴
 before(async () => {
   this.instance = await Mung.deployed();
 })

 it("should be initialized with correct value", async () => {
   // 스마트 컨트랙트에 정의된 text() 함수 호출
   const text = await this.instance.text(); 
   assert.equal(text, "Hello Mung~", "Wrong initialized value!");
 });

 it("should change the text", async () => {
   const changedText = 'hoho';
   // 스마트 컨트랙트에 정의된 setText() 함수 호출
   // 마지막 객체는 트랜잭션 발생 정보를 가진다.
   await this.instance.setText(changedText, {from: accounts[0]});
   // 스마트 컨트랙트에 정의된 say() 함수 호출
   const text = await this.instance.text();
   assert.equal(text, changedText, "dose not change the value!");
 });

 it("should throw exception", async () => {
   // 스마트 컨트랙트에 정의된 errorOccur() 함수 호출
   await truffleAssert.reverts(
     this.instance.errorOccur(0, {from: accounts[0]}),
     "hello world error"
   )
 });

 it("should not throw exception", async () => {
   // 스마트 컨트랙트에 정의된 errorOccur() 함수 호출
   const rst = await this.instance.errorOccur(1, {from: accounts[0]});
   assert.equal(rst.words[0], 1, "ErrorOccur event not emitted!");
 });
})