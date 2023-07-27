const app = require("express")();


app.get("/",(req,res)=>{
    res.send("Helloo");
});

app.listen(3000,()=>{
    console.log("Listening at the port 3000");
})