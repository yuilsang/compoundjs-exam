exports.routes = function (map) {

    // ================================
    // HOME
    // ================================
    map.get("/", "home#index");
    map.get("/test", "test#index");

    // ================================
    // EXAMPLE Main
    // ================================
    map.get("/example", "example#index");

    // ================================
    // Ajax 테스트
    // ================================
    map.get("/example/request", "example#request");
    map.get("/example/api/request", "example#api_request");
    map.post("/example/api/request_post", "example#api_request_post");

    // ================================
    // UPLOAD 기능 테스트
    // ================================
    map.get("/example/upload", "example#upload");
    map.get("/upload/filelist.:format?", "upload#filelist");
    map.post("/upload/filesave.:format?", "upload#filesave");
    map.get("/upload/fileremove.:format?", "upload#fileremove");

};
