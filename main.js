// main.js
const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, 'YouTubeMusic.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadURL('https://music.youtube.com');
  win.setMenuBarVisibility(false);
  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS('::-webkit-scrollbar { display: none; }');
  });
  win.on('close', (event) => {
    win.destroy();
  });
}

function registerMediaKeys() {
  globalShortcut.register('MediaPlayPause', () => {
    if (win && !win.isDestroyed()) {
      win.webContents.executeJavaScript(`
        document.querySelector('button[aria-label*="Play"]')?.click() || 
        document.querySelector('button[aria-label*="Pause"]')?.click();
      `);
    }
  });

  globalShortcut.register('MediaNextTrack', () => {
    if (win && !win.isDestroyed()) {
      win.webContents.executeJavaScript(`
        document.querySelector('button[aria-label="Next track"]')?.click();
      `);
    }
  });

  globalShortcut.register('MediaPreviousTrack', () => {
    if (win && !win.isDestroyed()) {
      win.webContents.executeJavaScript(`
        document.querySelector('button[aria-label="Previous track"]')?.click();
      `);
    }
  });

  globalShortcut.register('MediaStop', () => {
    if (win && !win.isDestroyed()) {
      win.webContents.executeJavaScript(`
        document.querySelector('button[aria-label*="Pause"]')?.click();
      `);
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  registerMediaKeys();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  globalShortcut.unregisterAll();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});