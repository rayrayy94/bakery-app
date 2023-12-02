const express = require('express');
const cors = require('cors');

let app = express();

require('./DB/Conn');
const Cake = require('./Model/Cake');

app.use(cors());
app.use(express.json());

const PORT = 8080;

// upload a cake
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

// get data for all the cakes in database
app.get('/cake', async (req, res) => {
    try{
        let findCake = await Cake.find();
        res.status(200).send(findCake);
    }
    catch{
        res.status(500).send('Server Crashed');
    }
});

// get a specific cake by its ID
app.get('/cake/:id', async (req, res) => {
    try{
        let id = req.params.id
        let findCake = await Cake.findById(id);
        res.status(200).send(findCake);
    }
    catch{
        res.status(500).send('Server Crashed');
    }
});


// delete a cake by its ID
app.delete('/cake/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let deleteCake = await Cake.deleteOne({_id: id});
        res.status(200).send(deleteCake);
    }
    catch{
        res.status(500).send('Server Crashed');
    }
})


// update cake info
app.patch('/cake/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let updateCake = await Cake.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).send(updateCake);
    }
    catch{
        res.status(500).send('Server Crashed');
    }
})



app.listen(PORT, ()=> {
    console.log(`API running on port ${PORT}`);
});

