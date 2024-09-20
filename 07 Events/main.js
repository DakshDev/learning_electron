const {app, BrowserWindow} = require("electron");

function createMainWindow(){
    const win = new BrowserWindow({
        height: true,
        width: true,
        title: "Event"
    });
    win.loadFile("./index.html");
}


// app.whenReady().then(()=>{
//     createMainWindow();
// })


// Events       =>  More event has go document and check
app.on("ready",()=>{
    createMainWindow();
})

app.on("before-quit",(e)=>{
    console.warn("Didn't Close")
    e.preventDefault();
})

app.on("browser-window-focus",()=>{
    console.warn("I am in the browser")
})

app.on("browser-window-blur",()=>{
    console.warn("Out")
})