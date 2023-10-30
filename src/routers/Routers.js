import  express  from "express";
import userController from "../controllers/userController";

class Routers{

    constructor(){
        this.route = express.Router();
        this.initRoutes();
    }

    initRoutes(){
        this.route.get("/users", userController.index);
        this.route.get("/users/:id", userController.show);
        this.route.put("/users/:id", userController.update);
        this.route.delete("/users/:id", userController.delete);
        this.route.post("/users", userController.store);
    }

    getRoutes(){
        return this.route;
    }

}

export default new Routers().getRoutes();