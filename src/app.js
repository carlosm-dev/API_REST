import express from "express";
import homeRoutes from "./routers/homeRoutes";
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
        this.app.use("/", homeRoutes);
    }

}

export default new App().app;