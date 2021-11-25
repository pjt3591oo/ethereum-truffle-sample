# truffle 

* 컴파일(compile)

* 배포(migrate)

* 실행(console)

* 테스트(test)

```
$ truffle compile

$ truffle migrate

$ truffle console

$ truffle test
```

**`--network development`** 옵션을 사용하여 truffle-config에 정의된 노드 정보에서 작업 수행

## 컴파일

**`compile`** 명령어는 contracts 폴더에 있는 파일들을 컴파일하여 build/contracts 아래에 결과를 저장한다.

## 배포

**`migrate`** 명령어는 migrations에서 contracts 폴더에 있는 solidity 파일을 읽어서 --network 인자에 따라 해당 네트워크에 배포한다. 

만약 contracts가 비었다면 compile을 수행한다

주의사항: 파일의 시작은 **`숫자_파일명.sol`** 형식이어야 한다.

```js
// contracts에 정의된 파일명
const HelloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {

  // 두 번째 인자부턴 생성자에 전달할 인자를 전달한다.
  deployer.deploy(HelloWorld, "Hello World!!");
};
```

## 실행

**`console`** 명령어는 --network 인자에 따라 해당 네트워크에 console 모드로 접속하여 스마트 컨트랙트를 직접 호출할 수 있다.

```
truffle(network) > contract = await HelloWorld.deployed();

truffle(network) > contract.say();
'hello world!!'

truffle(network) > contract.setGreeting("mung");
{
  tx 정보
}


truffle(network) > contract.say();
'mung'

truffle(network) >
```

## 테스트

**`test`** 명령어는 --network 인자에 따라 해당 네트워크에 연결하여 /test 아래에 정의된 테스트 코드를 실행한다.