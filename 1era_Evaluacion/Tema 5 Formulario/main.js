function createWindow() {
    // Crea la ventana del navegador.
    let win = new BrowserWindow({
        width: 400,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    // y carga el index.html de la aplicación.
    win.loadFile('index.html')
    win.setMenu(null)
    //para mostrar en la ventana la herramientas de desarrollo de chrome:
    win.webContents.openDevTools()
}
//cuando la aplicación electron está lista (todos los procesos generados)
//mediante app.on llamamos a la función que se va ha encargar de lanzar las
//ventanas:

const { app, BrowserWindow, dialog } = require('electron')
require('@electron/remote/main').initialize()
let mainWindow
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 365,
        height: 450,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    require("@electron/remote/main").enable(mainWindow.webContents)
    mainWindow.loadFile('index.html')
    //mainWindow.webContents.openDevTools()
    mainWindow.setMenu(null)
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}
app.on('ready', createWindow)