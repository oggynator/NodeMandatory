const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req,res)=>{
    
    return res.sendFile(__dirname + "/public/index.html");
});

app.get("/npm", (req,res)=>{
    
    return res.sendFile(__dirname + "/public/npm.html");
});

app.get("/rest", (req,res)=>{
    
    return res.sendFile(__dirname + "/public/rest.html");
});


app.get("/noderun", (req,res)=>{
    
    return res.sendFile(__dirname + "/public/noderun.html");
});

app.get("/jquery", (req,res)=>{
    
    return res.sendFile(__dirname + "/public/jquery.html");
});


//All API 
let devices= [
    {id: 1, type: "computer"},
    {id: 2, type: "Smart Watch"}
];
nextDeviceId=3;

app.get("/rest/devices",(req, res) =>{ //HTTP GET
 return res.send({response: devices});
});

app.get("/rest/devices/:id", (req,res)=>{ //HTTP GET BY ID
    const device = devices.find(device => device.id===Number(req.params.id));
    return res.send({response: devices [req.params.id] });
});

app.post("/rest/devices",(req,res)=>{ //HTTP POST

let newDevice = {}
newDevice.id=nextDeviceId++;
newDevice.type= req.body.type;
if(!newDevice.type){
    return res.status(400).send({message: "Missing a device type, try again noob"});
}
devices.push(newDevice);
return res.send({body: req.body});
});

app.delete("/rest/devices/:id",(req,res)=>{ //HTTP delete
    devices = devices.filter(device=>device.id !== Number(req.params.id));

    return res.send({response: devices});
});


app.put("/rest/devices/:id",(req,res)=>{ //HTTP PUT
    const foundIndex = devices.findIndex(device=>device.id === Number(req.params.id));
    delete req.body.id;
    const newDevice = { ...devices[foundIndex], ...req.body};
    devices[foundIndex] =newDevice

    return res.send({response: devices});
});


//Listens on the given port described in the run script
app.listen(process.env.PORT, error=>{
    if(error){
        console.error(error);
    }
    console.error("Server is alive and running on port:", process.env.PORT);
    
});
