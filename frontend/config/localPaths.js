const STATS_ROOT = './';
const LOCAL_PUBLIC_URL = 'http://localhost:3000';
const LOCAL_PUBLIC_PATH = LOCAL_PUBLIC_URL + '/';
const PROD_PUBLIC_PATH = '/static/bundles/';
const APP_BUILD_PATH = './static/bundles/';
const DEV_BUILD_STATS = 'webpack-stats.dev.json';
const PROD_BUILD_STATS = 'webpack-stats.prod.json';

module.exports = {
    statsRoot: STATS_ROOT,
    localPublicPath: LOCAL_PUBLIC_PATH,
    localPublicUrl: LOCAL_PUBLIC_URL,
    prodPublicPath: PROD_PUBLIC_PATH,
    appBuild: APP_BUILD_PATH,
    devBuildStats: DEV_BUILD_STATS,
    prodBuildStats: PROD_BUILD_STATS
};
