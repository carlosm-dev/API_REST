import express from "express";
import route from "./routers/Routers";
import dotenv from "dotenv";
dotenv.config();
import "./database";

class App{

    constructor(){
        this.app = express();
        this.middleware();
        this.routers();
    }

    middleware(){
        this.app.use(express.urlencoded({ extended: true}));
        this.app.use(express.json());
    }

    routers(){
        this.app.use(route);
    }

}

export default new App().app;