# CompoundJS Example

## Overview
Node.js Platform, compoundJS Framework, Bootstrap UI Framework 등을 이용하여 간단하게 시나리오 주제별로 웹 서비스를 만들어 보고 필요한 내용을 정리를 해보고자 합니다.
문제가 있는 부분들은 공유 부탁 드립니다.

## http://localhost:3000/ 호출
##### Controller, Action 생성
	$ compound g controller home index

##### config/routes.js 파일 수정
	config/routes.js 파일을 수정한다.
	map.get("/", "home#index");
	
	
	