const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const server = require('./api/server');
const { autoUpdater } = require('electron-updater');
const notifier = require('node-notifier');
const log = require('electron-log');

log.transports.file.format = '{h}:{i}:{s}:{ms} {text}';
log.transports.file.maxSize = 5 * 1024 * 1024;
log.transports.file.level = 'info';

const devPath = 'http://localhost:3000';
const prodPath = `file://${path.join(__dirname, '../build/index.html')}`;

let mainWindow;

const simpleNotify = (text) => {
  log.info(text);
  notifier.notify(text);
};

const updateConfirmation = (e) => {
  const restartNowAction = 'Restart now';
  const versionLabel = e.label ? `Version ${e.version}` : 'The latest version';
  notifier.notify(
    {
      title: 'A new update is ready to install.',
      message: `${versionLabel} has been downloaded and will be automatically installed after restart.`,
      closeLabel: 'Okay',
      actions: restartNowAction,
    },
    (err, response, metadata) => {
      if (err) throw err;
      if (metadata.activationValue !== restartNowAction) {
        return;
      }
      autoUpdater.quitAndInstall();
    },
  );
};

autoUpdater.on('update-available', () => simpleNotify('Update available.'));
autoUpdater.on('error', err => simpleNotify(`Error in auto-updater. ${err}`));
autoUpdater.on('download-progress', progressObj =>
  simpleNotify(`
  Download speed: ${progressObj.bytesPerSecond} - 
  Downloaded ${progressObj.percent}% 
  (${progressObj.transferred}/${progressObj.total})
  `));
autoUpdater.on('update-downloaded', e => updateConfirmation(e));

const initAutoUpdater = () => {
  if (isDev) {
    return;
  }

  if (process.platform === 'linux') {
    return;
  }
  log.info('run update');
  autoUpdater.checkForUpdatesAndNotify();
};

const createWindow = () => {
  app.server = server;
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(isDev ? devPath : prodPath);
  mainWindow.on('closed', () => { mainWindow = null; });
  initAutoUpdater();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
