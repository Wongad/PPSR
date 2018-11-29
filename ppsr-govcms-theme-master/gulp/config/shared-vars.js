
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pjson from '../../package.json';
import minimist from 'minimist';

//args.argName can be set to true by adding " --argName" when running console commands
const args = minimist(process.argv.slice(2));

//__dirname is a global variable inherant to node.js
const notification_icon_location = __dirname+'/../../node_modules/gulp-notify/assets/';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
const plugins = gulpLoadPlugins();

const c = plugins.util.colors;

export { gulp, plugins, c, args, pjson, notification_icon_location }
