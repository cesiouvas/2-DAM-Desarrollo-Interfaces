const { app, BrowserWindow, dialog } = require('electron')
require('@electron/remote/main').initialize();

function createWindow() {
    // Crea la ventana del navegador.
    let win = new BrowserWindow({
        width: 560,
        height: 550,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    require("@electron/remote/main").enable(win.webContents);

    // y carga el index.html de la aplicación.
    win.loadFile('index.html')
    win.webContents.openDevTools()
    win.setMenu(null)
    win.on('closed', function () {
        win = null
    })
}

//para mostrar en la ventana la herramientas de desarrollo de chrome:



//cuando la aplicación electron está lista (todos los procesos generados)
//mediante app.on llamamos a la función que se va ha encargar de lanzar las
//ventanas:
app.on('ready', createWindow)