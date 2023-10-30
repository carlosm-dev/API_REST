import getLabel from "../share/labelMensages";
import userService from "../services/UserService";


class UserController{

    async  index(req, resp){
        try{
            const users = await userService.index();
            return resp.json(users);
        }catch(e){
            return resp.json(null);
        }
    }

    async store(req, resp){
        try{
            const newUser = await userService.store(req.body);
            return resp.json(newUser);
        }catch(e){
           return resp.status(400).json({
                errors: e.errors.map((e) => e.message),
            })
        }
    }

    async show(req, resp){
        try{
            const { id } = req.params;
            const user = await userService.show(id);
            return resp.json(user);
        }catch(e){
            return resp.json(null);
        }
    }

    async update(req, resp){
        try{
            const { id } = req.params;
            if(id){
                const user = await userService.show(id);
                if(user){
                    const updatedUser = await userService.update(user,req.body);
                    return resp.json(updatedUser);
                }else{
                    return resp.status(200).json({
                        erros: getLabel('user-not-found'),
                    })
                }
            }else{
                return resp.status(400).json({
                    erros: getLabel('invalid-user'),
                })
            }
        }catch(e){
            console.log(e)
            return resp.json({errors: 'Erro ao realizar update'});
        }
    }

    async delete(req, resp){
        try{
            const { id } = req.params;
            if(id){
                const user = await userService.show(id);
                if(user){
                     await userService.delete(user);
                    return resp.json({
                        result: getLabel('user-removed'),
                    });
                }else{
                    return resp.status(200).json({
                        erros: getLabel('user-not-found'),
                    })
                }
            }else{
                return resp.status(400).json({
                    erros: getLabel('invalid-user'),
                })
            }
        }catch(e){
            return resp.json(null);
        }
    }
}


export default new UserController();