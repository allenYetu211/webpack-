var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: { // 入口文件
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/a.js',
        c: './src/script/a.js',
    },
    // entry: ['./src/script/main.js', './src/script/a.js'],
    output: {
        path: './dist', // 输出地址
        filename: 'js/[name]-[chunkhash].js', // 生成名字
        publicPath: 'html://cdn.com/' // 生成地址会被替换成绝对地址
            // filename: '[name]-[hash].js'
    },
    plugins: [
        //  参数说明 npm网址 搜索html-webpack-plugin
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'src/index.html',
            // inject: 'head',  // 指定输出位置 默认为body内
            inject: false, // 手动添加地址时候 需要将默认 为body
            title: 'this is a.html', // 输出指定的内容 在html中是用 Ejs JS 模板语言 官方支持
            // minify: { // 文件压缩
            //     removeComments: true, // 删除注释
            //     collapseWhitespace: true // 删除空格
            // }
            // chunks: ['main', 'a']  // 指定所包含的chunks
            excludeChunks: ['b', 'c']  // 排除 指定的chunks
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'src/index.html',
            inject: false,
            title: 'this is b.html',
            excludeChunks: ['a', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'src/index.html',
            inject: false,
            title: 'this is c.html',
            excludeChunks: ['b', 'a']
        })
    ]
}
