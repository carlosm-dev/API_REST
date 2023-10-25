import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/Aluno";

const models = [Aluno];

//Criando conexao
const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));