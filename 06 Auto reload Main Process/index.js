const {app, BrowserWindow} = require("electron");

function createMainWindow(){
    const win = new BrowserWindow({
        height: true,
        width: true,
        title: "Auto Relaod Main Process",
        autoHideMenuBar: true,
    })
    win.loadFile("./index.html")
}

app.whenReady().then(() => createMainWindow());