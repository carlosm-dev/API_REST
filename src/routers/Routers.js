import  express  from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

class Routers{

    constructor(){
        this.route = express.Router();
        this.initRoutes();
    }

    initRoutes(){
        this.route.get("/", homeController.index);
        this.route.post("/users", userController.store);
    }

    getRoutes(){
        return this.route;
    }

}

export default new Routers().getRoutes();