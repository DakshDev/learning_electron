const {app, BrowserWindow} = require("electron");


function createMainWindow(){
    const win = new BrowserWindow({
        height: true,
        width: true,
        title: "Practise", 
        resizable: false,
        minimizable: false,
        closable: false,
        autoHideMenuBar: true,
    })
    win.loadFile("./index.html");
    win.webContents.openDevTools()
}

app.whenReady().then(()=>createMainWindow());

