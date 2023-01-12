import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import userRoutr from './handlers/usersHandlers';
import productroute from './handlers/productsHandlers';
import orderroute from './handlers/orderHandlers';
import config from './config';


const app: express.Application = express();
const port = config.port;
const address: string = `0.0.0.0:${port}`;
const h = {"ENV": "POSTGRES_USER"};
console.log(h);
app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
    res.status(200).send('Hello World!');
})

userRoutr(app);
productroute(app);
orderroute(app);

app.listen(port, function () {
    console.log(`starting app on: ${address}`);
})

export default app;