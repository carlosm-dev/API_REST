import Sequelize, { Model } from 'sequelize';
import labelMessage from '../share/labelMensages';
import bcrypt from 'bcryptjs';

export default class User extends Model{
    static init(sequelize){
        super.init({

            nome:{
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3,255],
                        msg: labelMessage('name-is-not-empty')
                    }
                }
            },

            email: {
               type: Sequelize.STRING,
               defaultValue: '',
               validate: {
                    isEmail: {
                        msg: labelMessage('email')
                    },
               },
            },
        
            password_hash: Sequelize.STRING,

            password:{
                type : Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len:{
                        args: [3,50],
                        msg: labelMessage('password-weak')
                    },
                },
            }, 
        },{
            sequelize
        });
        this.addHook('beforeSave', async user =>{
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        })
        
        return this;
    }
}