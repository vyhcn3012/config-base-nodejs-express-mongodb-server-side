const path = require('path')

module.exports.getConfig = () => {
    const config = {
        'MODE': 'Development',             
        'PORT': process.env.PORT || 5555,
        //Change Mongo URI to your own
        'MONGO_URL': 'mongodb+srv://admin:@cluster0.qlxgh.mongodb.net/?retryWrites=true&w=majority',
        'MONGO_RESTORE_URL': 'mongodb+srv://admin:@cluster0.qlxgh.mongodb.net/?retryWrites=true&w=majority',
        'JWT_SECRET': 'R4ND0M5TR1NG',
        'JWT_TOKEN_LIFETIME': 30 * 24 * 60 * 60, // 60 MINUTES IN SECOND
        'COOKIE_TOKEN_LIFETIME': 30 * 24 * 60 * 60 * 1000, // 60 MINUTES IN NANO SECOND
    }

    // Modify for Production
    if (process.env.NODE_ENV === 'production') {
        config.MODE = 'Production';
        // Heroku
        config.HOST = `https://example.herokuapp.com`;
    } else {
        // local
        config.HOST = `http://localhost:${process.env.PORT || 5555}`;
    }

    return config
}
