const {app, BrowserWindow} =  require("electron");

function createMainWindow(){
    const win = new BrowserWindow({
        title: "Parent Window",
        autoHideMenuBar: true,
        resizable: false,
        height: true,
        width: true,
        backgroundColor: "#232323",
    });
    win.loadFile("./index.html");
    win.webContents.openDevTools();

// Open Child Window By Main Process

    // const child = new BrowserWindow({
    //     parent: win,
    //     title: "Child Window",
    //     height: "50%",
    //     width: "50%",
    //     backgroundColor: "#434343",
    // });
    // child.loadFile("./child.html")
    // child.open()
    
};


app.whenReady().then(() => createMainWindow());