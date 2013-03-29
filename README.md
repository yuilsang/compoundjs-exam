# CompoundJS Example

## Overview
Node.js Platform, compoundJS Framework, Bootstrap UI Framework 등을 이용하여 간단하게 시나리오별로 웹 서비스를 만들어 보고 필요한 내용을 정리를 해보고자 합니다.
문제가 있는 부분들은 공유 부탁 드립니다.

## http://localhost:3000/ 호출
##### 작업
	# controller, action scaffolding 
	$ compound g controller home index
	
	# config/routes.js 파일 수정.
	map.get("/", "home#index");
	
	
## HTML5 업로드 기능 구현 
##### 작업
	# 업로드 페이지 생성
	$ compound g controller upload index
	
	# 업로드 api 생성
	$ compound g controller upload api_upload
	
	# config/route.js 파일 수정
	map.get("/upload", "upload#index");
	map.post("/api/upload", "upload#api_upload");
	
	# 업로드 폴더 지정 
	
	
