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

    // http://localhost:3000/api/uploadedfilelist
    map.get("/api/uploadedfilelist.:format?", "upload#api_uploadedfilelist");

    // http://localhost:3000/api/upload
    map.post("/api/upload.:format?", "upload#api_upload");

};
