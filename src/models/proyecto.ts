import {Model} from 'sequelize';

interface ProyectoAttributes{
    id:number;
    title:string;
    status:string;
}

module.exports = (sequelize: any, DataTypes: any)=>{
    class Proyecto extends Model<ProyectoAttributes> implements ProyectoAttributes{
      id!: number;
      title!: string;
      status!: string;
      
      static associate(models:any){
        //Proyecto.belongsToMany(models.User,{through:'AsignacionProyecto'})
      }
    }

    Proyecto.init({
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false,            
        },
        status:{
            type: DataTypes.STRING,
            allowNull:false,            
        }
    },{
        sequelize,
        modelName:'Proyecto'
    });
    return Proyecto;
};