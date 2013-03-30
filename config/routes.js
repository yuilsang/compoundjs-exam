exports.routes = function (map) {

    // ================================
    // HOME
    // ================================
    map.get("/", "home#index");

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
