const express=require("express");
const bodyParser = require("body-parser");
const app=express();
app.use(express.static("public"))
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));
var ownmessage="hi i am manoj"
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res){
    var t=req.body.boxno;
    var u=req.body.yname;
    ownmessage="STB-NO: "+t+"\ncustomername: "+u;
    console.log(ownmessage);
    const accountSid = 'ACf2374f1a905a9db367e47f5e49ecfd6f';
const authToken = '6c54b8aaf019994d3c86a40d2955fa74';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: ownmessage,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+919087397440'
    })
    .then(message => console.log(message.sid))
    res.redirect("/")
    
})
//process.env.PORT
app.listen(process.env.PORT,function(req,res){
    console.log("hello there");
})
