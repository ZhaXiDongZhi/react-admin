const {override,fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override(

 //针对andt按需打包，根据import来打包
    fixBabelImports("import",{
        libraryName:'antd',
        libraryDirectory:'es',
        style:true
    }),

    //使用Less-loader对源码中的less的变量进行重新指定
    addLessLoader({
        javascriptEnabled:true,
        mudifyVars:{'@primary-color':'#1DA57A'}
    })
)