import * as dotenv from "dotenv";
import cors from  "cors";
import express from "express";
import { connectToDatabase } from "./database";

//Load enviroment variables from the .env file
dotenv.config();

const {ATLAS_URI} = process.env;

if(!ATLAS_URI){
    console.error("No ATLAS_URI enviroment variable has defined in config.env");
    process.exit(1);
}

connectToDatabase(ATLAS_URI).then(()=>{
    const app =express();
    app.use(cors());

    // start the Express server
    app.listen(5200,()=>{
        console.log('Server running at http://localhost:5200');
    });
}).catch(error =>console.error(error));