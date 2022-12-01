import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import db from '../models';


class DiabetesController extends AbstractController{
    //Singleton
    //Atributo de clase
    private static instance : DiabetesController;
    //Metodo de clase
    public static getInstance():AbstractController{
        if(this.instance){
            return this.instance;
        }
        this.instance = new DiabetesController("diabetes");
        return this.instance;
    }

    protected initRoutes(): void {
        this.router.get('/readRecords',this.getReadRecords.bind(this));
        this.router.get('/readRecord',this.getReadRecord.bind(this));
        this.router.post('/createRecord',this.postCreateRecord.bind(this))
        this.router.post('/deleteRecord',this.postDeleteRecord.bind(this))
        this.router.post('/updateRecord',this.postUpdateRecord.bind(this))
    }    

    private async getReadRecords(req:Request,res:Response){
        try{
            let ans = await db.diabetes.findAll();
            res.status(200).send(ans);
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error fatal:"+err);
        }
    }

    private async getReadRecord(req:Request,res:Response){
      try{
          let ans = await db.diabetes.find({
            where:{
              id: req.body.id
            }
          });
          res.status(200).send(ans);
      }catch(err:any){
          console.log(err);
          res.status(500).send("Error fatal:"+err);
      }
  }

    private async postCreateRecord(req:Request,res:Response){
        try{
            console.log(req.body);
            await db.diabetes.create(req.body);
            res.status(200).send("Registro exitoso")
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error fatal")
        }
    }

    private async postDeleteRecord(req:Request,res:Response){
      try{
          console.log(req.body);
          await db.diabetes.destroy({
            where:{
              id: req.body.id
            }
          });
          res.status(200).send("Registro eliminado")
      }catch(err:any){
          console.log(err);
          res.status(500).send("Error fatal")
      }
    }

    private async postUpdateRecord(req:Request,res:Response){
      try{
          console.log(req.body);
          await db.diabetes.update({
            pregnancies: req.body.pregnancies,
            glucose: req.body.glucose,
            bloodPressure: req.body.bloodPressure,
            skinThickness: req.body.skinThickness,
            insulin: req.body.insulin,
            BMI: req.body.BMI,
            DPF: req.body.DPF,
            age: req.body.age,
          },{
            where: {
              id: req.body.id
            }
          });
          res.status(200).send("Registro actualizado")
      }catch(err:any){
          console.log(err);
          res.status(500).send("Error fatal")
      }
    }
}

export default DiabetesController;