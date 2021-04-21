module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                'Android >= 7.0',
                'iOS >= 10',
                'Chrome > 71',
                'ff > 31',
                'ie >= 8'
            ]
        },
        'postcss-pxtorem': {
            rootValue: 16, // 结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
            propList: ['*'],
            selectorBlackList: ['.van-notify', ],
        }
    }
}