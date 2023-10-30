import userRepository from "../repository/UserRepository";

class UserService{

    async  index(){
        console.log("passei no service")
        const retorno = await userRepository.index();
        return retorno;
    }

    async store(user){
        try{
            const newUser = await userRepository.store(user);
            return newUser;
        }catch(e){
        throw e;
        }
    }

    async show(userId){
        try{
            const user = await userRepository.show(userId);
            return user;
        }catch(e){
            throw e;
        }
    }

    async update(user,userUpdate){
        try{
            return userRepository.update(user,userUpdate);
        }catch(e){
            throw e;
        }
    }

    async delete(user){
        try {
           await userRepository.delete(user);
        } catch (e) {
            throw e;
        }
    }


}

export default new UserService();