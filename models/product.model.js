const mongoose = require("mongoose");

const productSchema =  mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please enter name"]
        },
        quantity: {
            type: Number,
            require: [true, "Please enter quantity"],
            default: 0
        },
        price: {
            type: Number,
            require: [true, "Please enter price"]
        },
        image: {
            type: String,
            require: [false]
        },
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;