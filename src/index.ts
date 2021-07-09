import express from "express";

const app = express();
const PORT = 3000; 

app.get("/test", (req, res) => {
    console.log(req.body);
    res.send("200, OK. ");
});

app.listen(PORT, ()=>{
    console.log(`app listening at http://localhost:${PORT}`)
})
export default app;
