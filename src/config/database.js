const dotenv = require('dotenv');
dotenv.config();

module.exports ={
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
        'createdAt': 'created_at',
        'updatedAt': 'updated_at'
    },
    dialectOptions:{
        timeZone: 'America/Sao_Paulo'
    },
    timeZone: 'America/Sao_Paulo'
}