import express, { Request, Response } from 'express';
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();

app.use(bodyParser.json());


app.post('/events', async (req: Request,res: Response) => {
        const { type, data } = req.body;

        if(type === 'CommentCreated'){
           const status = data.content.includes('orange') ? 'rejected' : 'approved';  

           await axios.post('http://localhost:4005/events', {
                type: 'CommentModerated',
                data: {
                    id: data.id,
                    postId: data.postId,
                    status,
                    content: data.content
                }
           })
        }

       res.send({});
});

app.listen(4003, () => {
    console.log('This app Listen on port 4003')
});




