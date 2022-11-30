import {Model} from 'sequelize';

interface DiabetesAttributes{
    id:number;
    pregnancies:number;
    glucose:number;
    bloodPressure:number;
    skinThickness:number;
    insulin:number;
    BMI:number;
    DPF:number;
    age:number;
    class:number;
}

module.exports = (sequelize: any, DataTypes: any)=>{
    class Diabetes extends Model<DiabetesAttributes> implements DiabetesAttributes{
      id!: number;
      pregnancies!: number;
      glucose!: number;
      bloodPressure!: number;
      skinThickness!: number;
      insulin!: number;
      BMI!: number;
      DPF!: number;
      age!: number;
      class!: number;
    }

    Diabetes.init({
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true
        },
        pregnancies:{
            type: DataTypes.INTEGER,
            allowNull:true,            
        },
        glucose:{
          type: DataTypes.INTEGER,
          allowNull:true,            
        },
        bloodPressure:{
          type: DataTypes.INTEGER,
          allowNull:true,            
        },
        skinThickness:{
          type: DataTypes.INTEGER,
          allowNull:true,            
        },
        insulin:{
          type: DataTypes.INTEGER,
          allowNull:true,            
        },
        BMI:{
          type: DataTypes.INTEGER,
          allowNull:true,            
        },
        DPF:{
          type: DataTypes.INTEGER,
          allowNull:true,            
        },
        age:{
          type: DataTypes.INTEGER,
          allowNull:true,            
        },
        class:{
          type: DataTypes.INTEGER,
          allowNull:true,            
        },
    },{
        sequelize,
        modelName:'Diabetes'
    });
    return Diabetes;
};