import browserSyncLib from 'browser-sync';
import { exec } from 'child_process';
import chokidar from 'chokidar';

const browserSync = browserSyncLib.create();

// run webpack watch mode
exec('npm run dev');

browserSync.init({
  proxy: 'http://habitat-archuleta.local',
  files: ['dist/*.css', 'dist/*.js', '**/*.php'],
  open: false,
  notify: false
});

chokidar.watch(['**/*.php']).on('change', () => {
  browserSync.reload();
});
