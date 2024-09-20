const {app, BrowserWindow} = require("electron");
const windowStateKeeper = require("electron-window-state");

let win;
function createWindow(){

    const stateWindow = windowStateKeeper({
        defaultHeight: 500,
        defaultWidth: 800,
    });

    win = new BrowserWindow({
        height: stateWindow.height,
        width: stateWindow.width,
        x: stateWindow.x,
        y: stateWindow.y,
        alwaysOnTop: true,
    });

    win.loadFile("./index.html");
    stateWindow.manage(win);

    // Web Content Events
    let wc = win.webContents;

    wc.on("dom-ready",function(){
        console.warn("DOM is Loaded")
    });

    wc.on("did-finish-load",function(){
        console.warn("App is Loaded")
    });

    wc.on("before-input-event",function(){
        console.warn("Event Run Before CLicked")
    });

    wc.on("cursor-changed",function(){
        console.warn("Cursor Is Enter")
    });

}



app.on("ready",function(){
    createWindow();
});