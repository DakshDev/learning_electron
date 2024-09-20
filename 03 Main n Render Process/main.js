const {app, BrowserWindow} = require("electron");

// This console run in terinal
console.log("Main Process")
function createDesktopApp(){
    const win = new BrowserWindow({
        height:600,
        width:800,
        webPreferences:{
            nodeIntegration: true
        }
    })
    win.loadFile("./index.html");
    win.webContents.openDevTools();
}
app.whenReady().then(createDesktopApp)