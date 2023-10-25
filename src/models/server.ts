import express, { Application, Request, Response } from 'express';
import routesPatient from '../routes/patient'

class Server {

    private app: Application;
    private port: string;

    constructor() {

        this.app = express();
        this.port =process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () =>{

            console.log(`Aplicacion por el puerto ${this.port}`);
            
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) =>{
            res.json({
                msg: 'API WORKING'
            })

            this.app.use('/pacientes', routesPatient);
        })

    }

    middlewares() {
        
        //parseamos el body
        this.app.use(express.json());
    }
}

export default Server;