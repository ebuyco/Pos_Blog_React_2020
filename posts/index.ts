import express, { Request, Response } from 'express';
const bodyParser = require('body-parser');
const { randomBytes } =require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req: Request,res: Response) => {
        res.send(posts);
});

app.post('/posts', async (req: Request,res: Response) => {
        const id = randomBytes(4).toString('hex');
        const { title } = req.body;

        posts[id] = {
                id,
                title
        };

        await axios.post('http://localhost:4005/events', {
             type: 'PostCreated',
             data: {
                 id,
                 title    
             }           
        })

        res.status(201).send(posts[id]);
});

app.post('/events', (req: Request,res: Response) => {
   console.log('Received Event', req.body.type);  
   
   res.send({});
});

app.listen(4000, () => {
        console.log('Listening on 4000');
});