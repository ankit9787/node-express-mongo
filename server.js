const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require('./models/product.model')

app.use(express.json())
//routes

app.get('/', (req, res) => {
    res.send("This is get API")
})

app.get('/blog', (req, res) => {
    res.send("This is get blog API and this is node project")
})

app.get('/products', async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(400).json({ message: 'id not found' })

        }
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(400).json({ message: 'id not found' })

        }
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})


app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

mongoose.connect('mongodb+srv://ankit:ankit@nodemongotest1.36ib72a.mongodb.net/node_mongoose?retryWrites=true&w=majority').then(() => {
    app.listen(3300, () => {
        console.log("Server running");
    })
    console.log("We are connected");
}
).catch((err) => {
    console.log(err);
})