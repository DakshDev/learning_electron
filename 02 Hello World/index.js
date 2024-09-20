const {app,BrowserWindow} = require("electron");


function createDesktopApp(){
    const win = new BrowserWindow({
        height:600,
        width:800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile("./index.html");
    // For Opening Web Devtools
    win.webContents.openDevTools()
    
}


app.whenReady().then(createDesktopApp);