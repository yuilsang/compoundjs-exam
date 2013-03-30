# HTML5 업로드 기능 구현
Server-Side 에서는 파일을 업로드 할 수 있는 Web Service 를 구현하고 Client-Side 에서 jQuery HTML5 Uploader Plugin을 이용하여 업로드하고, 목록을 표시하는 기능의 간단한 서비스를 구현해 보도록 하겠습니다. 

## Server-Side

#### connect-form package install
/package.json 파일에 추가
	
	$  
	, "dependencies":
  	{ "ejs":              "*"
	  , "connect-form2": "latest"
	},

connect-form 설치
	
	$ npm install connect-form2
	

#### 환경설정 수정
/config/environments/development.js 파일 수정

	var express = require('express');
	var form = require('connect-form2'); // 추가
	
	module.exports = function (compound) {
	    var app = compound.app;
	    app.configure('development', function () {
	        app.enable('log actions');
	        app.enable('env info');
	        app.enable('watch');
	        app.use(form({ keepExtensions: true })); // 추가
	        app.use(require('express').errorHandler({ dumpExceptions: true, showStack: true }));
	    });
	};


#### 업로드 페이지 생성
client 에서 접근 가능 한 페이지를 생성 합니다. 

	$ compound g controller upload index

#### 업로드 API 생성
client 에서 Ajax 로 접근 할 API를 생성 합니다.

	$ compound g controller upload api_upload
	
#### 파일 목록 가져오는 API 생성
client 에서 Ajax 로 접근 할 API를 생성 합니다.

	$ compound g controller upload api_filelist

#### config/route.js 파일 수정
브라우저에서 접근 할수 있는 api를 생성 합니다.

	map.get("/upload", "upload#index");
	map.post("/api/upload", "upload#api_upload");

#### 업로드 폴더 생성
- app root 에 files 폴더를 생성

#### upload Controller index action 작성
/app/controllers/upload_controller.js

	action("api_upload", function() {
		// 자세한 내용은 소스코드 참조
	});


#### upload Controller api_upload action 작성
/app/controllers/upload_controller.js

	action("api_upload", function() {
		// 자세한 내용은 소스코드 참조
	});



## Client-Side

#### jQuery HTML5 Upload Plugin을 다운로드

- http://tutorialzine.com/2011/09/html5-file-upload-jquery-php/

#### HTML



