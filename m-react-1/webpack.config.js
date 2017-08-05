
const path = require("path");

module.exports = {
    entry : "./sec/app.js",
    output : {
        filename : "main.js",
        path : path.resolve(__dirname,"dists/assets"),
        publicPath : '/assets/'
    }

}