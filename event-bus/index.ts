import express, { Request, Response } from 'express';
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());

const events: any = [];

app.post('/events', (req: Request,res: Response) => {
        const event = req.body;

        events.push(event);

        axios.post('http://localhost:4000/events', event);
        axios.post('http://localhost:4001/events', event);
        axios.post('http://localhost:4002/events', event);
        axios.post('http://localhost:4003/events', event);

        res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
        res.send(events);
})

app.listen(4005, () => {
    console.log('Listen on http://localhost:4005/');
});