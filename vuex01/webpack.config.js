module.exports = {
    entry: ["./app.js",'./store.js'],
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                //test: /\.es6$/,
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
}