const express = require('express');
const cors = require('cors');

let app = express();

require('./DB/Conn');
const Cake = require('./Model/Cake');

app.use(cors());
app.use(express.json());

const PORT = 8080;


app.post('/cake', (req, res) => {
    try{
        let addCake = new Cake(req.body);
        addCake.save().then(()=> {
            res.status(200).send(addCake);
        }).catch((e)=> {
            res.status(404).send(e);
        })
    }
    catch(e){
        res.status(500).send(e);
    }
});

app.get('/cake', async (req, res) => {
    try{
        let findCake = await Cake.find();
        res.status(200).send(findCake);
    }
    catch{
        res.status(500).send('Server Crashed');
    }
})



app.listen(PORT, ()=> {
    console.log(`API running on port ${PORT}`);
});

