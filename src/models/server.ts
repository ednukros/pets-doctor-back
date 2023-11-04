import express, { Application, Request, Response } from 'express';
import routesPatient from '../routes/patient';
import routesEmployee from '../routes/employee';

import db from '../db/connection';
import cors from 'cors';

class Server {

    private app: Application;
    private port: string;

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();

    }

    listen() {
        this.app.listen(this.port, () => {

            console.log(`Aplicacion por el puerto ${this.port}`);

        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API pet doctor WORKING'
            })

            this.app.use('/patients', routesPatient);
            this.app.use('/employees', routesEmployee );
        })
        

    }

    middlewares() {

        //parseamos el body
        this.app.use(express.json());

        //cors
        this.app.use(cors());


    }

    async dbConnect() {
        try {

            await db.authenticate()
            console.log('Base de datos conectada');

        } catch (error) {

            console.log(error, "Error al conectarse a base de datos");
            
        }

    }


}

export default Server;