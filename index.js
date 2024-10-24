import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app=express();
const port=3000;
const API_KEY="b9e893bf36dc90943bdbb799d36d048c";
const API_URL="https://api.openweathermap.org/data/2.5/forecast";
const GEO_URL="http://api.openweathermap.org/geo/1.0/direct";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/search",async(req,res)=>{
    try{
        const geoParams={
            q:req.body.city,
            appid:API_KEY,
        }
        const geoResponse = await axios.get(GEO_URL,{params:geoParams});
        const lon = geoResponse.data[0]["lon"];
        const lat = geoResponse.data[0]["lat"];
       
        

        try{
            const weatherParams={
                lon:lon,
                lat:lat,
                appid:API_KEY,
                units:"metric",
            }
            const weatherResponse=await axios.get(API_URL,{params:weatherParams});
            const data= weatherResponse.data;
            res.render("index.ejs", {
                data: data,
                
            });
        }catch(error){
            console.log(error.response ? error.response.data : error.message);
            res.status(500).send("Error fetching weather data");
        }
    
    }catch(error){
        console.log(error.message);
        res.status(500);
        res.render("index.ejs", { error: "No city found by that entry. Please try again with a different city." });
    }
});


















app.listen(port,()=>{
    console.log("The server is running on port "+port);
});