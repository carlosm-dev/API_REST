import Aluno from "../models/Aluno";

class HomeController{

   async index(req, res){
      const novoALuno = await Aluno.create({
            nome: "Carlos",
            sobrenome: "Medeiros",
            email: "carlos@carlos",
            idade: 20,
            peso: 95.6,
            altura: 1.70
      });
        res.json(novoALuno);
    }

}

export default new HomeController();