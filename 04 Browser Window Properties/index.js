const {app, BrowserWindow} =  require("electron");

console.log("Main Process");


function CreateWindow(){
    const win = new BrowserWindow({
        height: true,
        width: true,
        title: "Restaurant Inventory",
        backgroundColor: "#232323",
        autoHideMenuBar: true,
        // resizable: false,
        // frame: false,
        // alwaysOnTop: true,
    });
    win.loadFile("./index.html");
}

app.whenReady().then(() => CreateWindow());


    
    