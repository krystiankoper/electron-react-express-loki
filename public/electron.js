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

function sendStatusToWindow(text) {

  log.info(text);

  win.webContents.send('message', text);

}

function createDefaultWindow() {

  win = new BrowserWindow();

  win.webContents.openDevTools();

  win.on('closed', () => {

    win = null;

  });

  win.loadURL(`file://${__dirname}/version.html#v${app.getVersion()}`);

  return win;

}

autoUpdater.on('checking-for-update', () => {

  sendStatusToWindow('Checking for update...');

})

autoUpdater.on('update-available', (info) => {

  sendStatusToWindow('Update available.');

})

autoUpdater.on('update-not-available', (info) => {

  sendStatusToWindow('Update not available.');

})

autoUpdater.on('error', (err) => {

  sendStatusToWindow('Error in auto-updater. ' + err);

})

autoUpdater.on('download-progress', (progressObj) => {

  let log_message = "Download speed: " + progressObj.bytesPerSecond;

  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';

  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';

  sendStatusToWindow(log_message);

})

autoUpdater.on('update-downloaded', (info) => {

  sendStatusToWindow('Update downloaded');

});

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
