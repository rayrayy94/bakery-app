const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

let app = express();

require('./DB/Conn');
const Cake = require('./Model/Cake');
const Order = require('./Model/Orders');
const Auth = require('./Model/Auth');

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

// toggle between 2 types of cakes and their listings
app.get('/togglecake/:cakeType', async (req, res) => {
    try{
        const cakeType = req.params.cakeType;
        let findCake = await Cake.find({cakeType: cakeType, availabilityStatus: true});
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
});


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
});








app.post('/orders', (req, res) => {
    try{
        let orderInfo = new Order(req.body);
        orderInfo.save().then(()=> {
            res.status(200).send(orderInfo);
        }).catch((e)=> {
            res.status(404).send(e)
        });
    }
    catch{
        res.status(500).send('Server Crashed');
    }
});

app.get('/orders', async (req,res) => {
    try{
        let orders = await Order.find();
        res.status(200).send(orders); 
    }
    catch{
        res.status(500).send('Server Crashed');
    }
});






// Get all listings for specific seller
app.get('/mycakes/:sellerid', async (req, res)=> {
    try{
        const sellerId = req.params.sellerid;
        let findCakes = await Cake.find({sellerId: sellerId});
        res.status(200).send({
            listing: findCakes,
            count: findCakes.length
        });
    }
    catch{
        res.status(500).send('Server Crashed');
    }
})



// return orders for specific sellerID
app.get('/sellerorders/:sellerId', async(req, res)=> {
    try{
        const sellerId = req.params.sellerId;
        let findSellerOrders = await Order.find({sellerId: sellerId});
        res.status(200).send(findSellerOrders);
    }
    catch{
        res.status(500).send('Server Crashed');
    }
})



// return orders for specific customerID
app.get('/customerorders/:customerId', async(req, res)=> {
    try{
        const customerId = req.params.sellerId;
        let findCustomerOrders = await Order.find({customerId: customerId});
        res.status(200).send(findCustomerOrders)
    }
    catch{
        res.status(500).send('Server Crashed');
    }
})






// Auth Sign Up Start

// compare emails in database vs user email when signing up
// if email is match during signup, send message saying 'email in use'
// else continue with signup process

// why cant user userEmail when destructing ?

app.post('/signup', async (req, res) => {
    try{
        let {email} = req.body;

        let findEmail = await Auth.findOne({email: email});

        if(findEmail){
            res.status(404).send({
                message: "Email Already In Use!"
            });
        }
        else{
            let addUser = new Auth(req.body);
            addUser.save().then(()=> {
                res.status(200).send({
                    message: 'Signup Successful'
                });
            }).catch((e)=> {
                res.status(404).send(e);
            });
        }
    }
    catch{
        res.status(500).send('Server Crashed')
    }
});

app.post('/login', async (req, res)=> {
    try{
        let {userEmail, userPassword} = req.body;

        let findUser = await Auth.findOne({email: userEmail});
        
        if(findUser){
            let matchPassword = await bcrypt.compare(userPassword, findUser.password);
            if(matchPassword){
                const {_id, firstName, lastName, email, accountType, phoneNumber} = findUser;
                res.status(200).send({
                    message: 'Login Successful',
                    data: {_id, firstName, lastName, email, accountType, phoneNumber}
                });
            }
            else{
                res.status(404).send({
                    message: 'Incorrect Password'
                });
            }
        }
        else{
            res.status(404).send({
                message: 'Incorrect Email'
            })
        }
    }
    catch{
        res.status(500).send('Server Crashed');
    }
})




// Auth Sign Up End 




app.listen(PORT, ()=> {
    console.log(`API running on port ${PORT}`);
});

