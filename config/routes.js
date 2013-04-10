exports.routes = function (map) {

    // ================================
    // HOME
    // ================================
    map.get("/", "home#index");

    // ================================
    // EXAMPLE
    // ================================
    map.get("/example", "example#index");
    map.get("/example/request", "example#request");
    map.get("/example/api/request", "example#api_request");

    // ================================
    // UPLOAD
    // ================================

    // http://localhost:3000/upload
    map.get("/upload", "upload#index");

    // http://localhost:3000/upload/filelist
    map.get("/upload/filelist.:format?", "upload#filelist");

    // http://localhost:3000/upload/send
    map.post("/upload/filesave.:format?", "upload#filesave");

};
