// SPDX-License-Identifier: UNLICENSED 

pragma solidity ^0.8.9; // 컴파일러 버전 명시

// 컨트랙트 명시
contract HelloWorld {
    string public greeting; // 문자열 타입 변수 선언

    // 생성자를 통해 값을 초기화 한다.
    constructor(string memory _greeting) { 
        greeting = _greeting;
    }
    
    // setter 함수를 통해 값을 변경 할 수있다.
    function setGreeting(string memory _greeting) public{
        greeting = _greeting;
    }
    
    // 변수값 출력
    function say() public view returns(string memory){
        return greeting;
    }

    // setter 함수를 통해 값을 변경 할 수있다.
    function errorOccur(uint a) public pure returns (uint) {
        require(a != 0, "hello world error");
        return a;
    }
}