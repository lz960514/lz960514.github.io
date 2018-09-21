const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.min.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    }
};