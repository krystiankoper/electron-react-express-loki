const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const server = require('./api/server');
const { autoUpdater } = require('electron-updater');

const devPath = 'http://localhost:3000';
const prodPath = `file://${path.join(__dirname, '../build/index.html')}`;

let mainWindow;

const sendStatusToWindow = (text) => {
  mainWindow.webContents.send('message', text);
};

autoUpdater.on('checking-for-update', () => sendStatusToWindow('Checking for update...'));
autoUpdater.on('update-available', () => sendStatusToWindow('Update available.'));
autoUpdater.on('update-not-available', () => sendStatusToWindow('Update not available.'));
autoUpdater.on('error', err => sendStatusToWindow(`Error in auto-updater. ${err}`));
autoUpdater.on('download-progress', progressObj =>
  sendStatusToWindow(`
  Download speed: ${progressObj.bytesPerSecond} - 
  Downloaded ${progressObj.percent}% 
  (${progressObj.transferred}/${progressObj.total})
  `));
autoUpdater.on('update-downloaded', () => sendStatusToWindow('Update downloaded'));

const initAutoUpdater = () => {
  if (isDev) {
    return;
  }

  if (process.platform === 'linux') {
    return;
  }

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
