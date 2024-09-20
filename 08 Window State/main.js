const {app, BrowserWindow} = require("electron");
const windowStateKeeper = require('electron-window-state');

let win;
function createMainWindow(){

    let stateWin = windowStateKeeper({
        defaultHeight: 600,
        defaultWidth: 800,
    })

    win = new BrowserWindow({
        height: stateWin.height,
        width: stateWin.width,
        x: stateWin.x,
        y: stateWin.y,
    })
    win.loadFile("./index.html");
    stateWin.manage(win);
}


app.on("ready",function(){
    createMainWindow();
});