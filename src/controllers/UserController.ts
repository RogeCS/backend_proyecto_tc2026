import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import db from '../models';


class UserController extends AbstractController{
    //Singleton
    //Atributo de clase
    private static instance : UserController;
    //Metodo de clase
    public static getInstance():AbstractController{
        if(this.instance){
            return this.instance;
        }
        this.instance = new UserController("user");
        return this.instance;
    }

    protected initRoutes(): void {
        this.router.get('/readUsers',this.getReadUser.bind(this));
        this.router.post('/createProyecto',this.postCreateProyecto.bind(this))
    }    

    private getReadUser(req:Request,res:Response){
        try{
            console.log("Prueba exitosa");
            res.status(200).send("Esto es una prueba");
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error fatal:"+err);
        }
    }

    private async postCreateProyecto(req:Request,res:Response){
        try{
            console.log(req.body);
            await db.Proyecto.create(req.body);
            console.log("Registro exitoso")
            res.status(200).send("Registro exitoso")
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error fatal")
        }
    }
}

export default UserController;