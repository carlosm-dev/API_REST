import User from "../models/User";

class UserRepository{

  async  index(){
        try{
            console.log("passei no repository")
            const users = await User.findAll();
            return users;
        }catch(e){
            return null;
        }
    }

    async store(user){
        try{
            const newUser = await User.create(user);
            return newUser;
        }catch(e){
            throw e;
        }
    }

    async show(userId){
        try{
            const user = await User.findByPk(userId);
            return user;
        }catch(e){
           throw e;
        }
    }

    async update(user,userUpdate){
        try{
            console.log( user  +  userUpdate)
            return await user.update(userUpdate);
        }catch(e){
            throw e;
        }
    }

    async delete(user){
        try {
           await user.destroy();
        } catch (e) {
            throw e;
        }
    }

}

export default new UserRepository();