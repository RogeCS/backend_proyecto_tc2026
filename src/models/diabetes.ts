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
            allowNull:false,            
        },
        glucose:{
          type: DataTypes.INTEGER,
          allowNull:false,            
        },
        bloodPressure:{
          type: DataTypes.INTEGER,
          allowNull:false,            
        },
        skinThickness:{
          type: DataTypes.INTEGER,
          allowNull:false,            
        },
        insulin:{
          type: DataTypes.INTEGER,
          allowNull:false,            
        },
        BMI:{
          type: DataTypes.DOUBLE,
          allowNull:false,            
        },
        DPF:{
          type: DataTypes.DOUBLE,
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
        modelName:'diabetes'
    });
    return Diabetes;
};