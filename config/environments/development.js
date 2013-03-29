var express = require('express');
var form = require('connect-form2'); // 추가

module.exports = function (compound) {
    var app = compound.app;

    app.configure('development', function () {
        app.enable('log actions');
        app.enable('env info');
        app.enable('watch');
        app.use(form({ keepExtensions: true })); // 추가
        app.enable('force assets compilation');
        app.use(require('express').errorHandler({ dumpExceptions: true, showStack: true }));
    });
};
