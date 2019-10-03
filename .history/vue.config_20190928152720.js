const devServer = require('./mock')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'asstes': '@/assets',
                'components': '@/components',
                'views': '@/views',

            }
        }
    }
}