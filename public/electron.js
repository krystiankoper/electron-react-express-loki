const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { autoUpdater } = require('electron-updater');
const notifier = require('node-notifier');
const log = require('electron-log');

const server = require('./api/server');

const devPath = 'http://localhost:3000';
const prodPath = `file://${path.join(__dirname, '../build/index.html')}`;

let mainWindow;

function sendStatusToWindow(text) {
  log.info(text);
  mainWindow.webContents.send('message', text);
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

// const showUpdateNotification = (e = {}) => {
//   const restartNowAction = 'Restart now';

//   const versionLabel = e.label ? `Version ${e.version}` : 'The latest version';

//   notifier.notify(
//     {
//       title: 'A new update is ready to install.',
//       message: `${versionLabel} has been downloaded and will be automatically installed after restart.`,
//       closeLabel: 'Okay',
//       actions: restartNowAction,
//     },
//     (err, response, metadata) => {
//       if (err) throw err;
//       if (metadata.activationValue !== restartNowAction) {
//         return;
//       }
//       autoUpdater.quitAndInstall();
//     },
//   );
// };

const initAutoUpdater = () => {
  if (process.platform === 'linux') {
    return;
  }
  log.info('updates');
  autoUpdater.checkForUpdatesAndNotify();
};

const createWindow = () => {
  app.server = server;
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(isDev ? devPath : prodPath);
  mainWindow.on('closed', () => { mainWindow = null; });
  log.info('Hello, log');
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
