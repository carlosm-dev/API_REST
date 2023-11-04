import User from "../models/User";
import getLabel from "../share/labelMensages";

class LoginController{
  
    async store(req, resp){
        try{
            const {email, password} = req.body;
            this.verifyEmaildAndPassword(email, password);
            const user = await User.findOne({ where: {email}});
            return resp.json("ok")
        }catch(e){
            return resp.status(401).json({
                error: e.message
            }
        );
    }
    }

    verifyEmaildAndPassword(email, password){
        if(!email || !password){
            throw new TypeError(getLabel('invalid-email-or-password'));
        }
    }

}

export default LoginController;