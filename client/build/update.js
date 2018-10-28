const fn = require('funclib');
const path = require('path');
const root = path.resolve('../');
const publicPath = path.join(root, 'server/public');
const distPath = path.join(root, 'client/dist/nice-blog');

console.log('');
fn.progress.start('Moving Files');
fn.rm(publicPath);
fn.mv(distPath, publicPath);
fn.progress.stop(() => fn.log('Update zjson Success!'));