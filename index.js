const app = require("express")();


app.get("/",(req,res)=>{
    res.send("HEyayaa");
});

app.listen(3000,()=>{
    console.log("Listening at the port 3000");
})