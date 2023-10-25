import User from "../models/User";

class UserController{

    async store(req, resp){
        try{
            const newUser = await User.create({
                nome: 'Pedro',
                email: 'carlos@carlim2.com.br',
                password: '1234'
            });
            resp.json(newUser);
        }catch(e){
             const {message} = e.errors[0];
            resp.status(400).json(`${message}`)
        }
    }
}

export default new UserController();