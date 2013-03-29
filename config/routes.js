exports.routes = function (map) {

    // HOME
    map.get("/", "home#index");

    // UPLOAD
    map.get("/upload", "upload#index");
    map.post("/api/upload", "upload#api_upload");

};
