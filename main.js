// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hidden'
    })

    // and load the index.html of the app.
    mainWindow.loadURL('https://poolside.fm')

    mainWindow.webContents.on('did-finish-load', function() {
        mainWindow.webContents.insertCSS(`
            .loader-background {
                -webkit-app-region: drag;
            }

            .loader-background {
                padding-top: 20px;
            }

            .poolside-blinker {
                padding-top: 20px !important;
            }

            #app .loader {
                padding-top: 36px;
            }

            header {
                -webkit-app-region: drag;
                height: 24px !important;
            }

            header ul {
                -webkit-app-region: no-drag;
            }

            header ul:not(:fullscreen) {
                padding-left: 60px;
            }

            header ul:fullscreen {
                padding-left: 0px;
            }

            header aside {
                -webkit-app-region: no-drag;
            }

            header aside span {
                height: 25px;
            }

            header aside span a {
                padding-top: 3px !important;
            }

            header aside span div {
                padding-top: 3px !important;
            }

            header aside .item {
                height: 25px !important;
                padding-top: 3px !important;
            }

            /*.draggable-bounds {
                -webkit-app-region: drag;
            }

            .section-icons ul li {
                -webkit-app-region: no-drag;
            }*/
        `)
    })

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', () => app.quit())
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
