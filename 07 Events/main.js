const {app, BrowserWindow} = require("electron");

function createMainWindow(){
    const win = new BrowserWindow({
        height: true,
        width: true,
        title: "Event"
    });
    win.loadFile("./index.html");
}


// app.whenReady().then(()=>{ // =============> same
//     createMainWindow();              
// })




app.on("ready",()=>{  // =============> same
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


// Events       =>  For More event check electron DOC
