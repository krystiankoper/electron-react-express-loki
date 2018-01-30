const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const server = require('./api/server');

const devPath = 'http://localhost:3000';
const prodPath = `file://${path.join(__dirname, '../build/index.html')}`;

let mainWindow;

const createWindow = () => {
  app.server = server;
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(isDev ? devPath : prodPath);
  mainWindow.on('closed', () => mainWindow = null);
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
