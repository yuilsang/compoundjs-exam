exports.routes = function (map) {

    // HOME
    map.get("/", "home#index");

    // UPLOAD
    map.get("/upload", "upload#index"); // http://localhost:3000/upload
    map.post("/api/upload.:format?", "upload#api_upload"); // http://localhost:3000/api/upload

};
