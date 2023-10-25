import  express  from "express";
import homeController from "../controllers/homeController";

class HomeRoutes{

    constructor(){
        this.route = express.Router();
        this.initRoutes();
    }

    initRoutes(){
        this.route.get("/", homeController.index);
    }

    getRoutes(){
        return this.route;
    }

}

export default new HomeRoutes().getRoutes();