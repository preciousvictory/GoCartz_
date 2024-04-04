const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        rate: {
            type: Number,
            required: true,
            default: 0
        },
        count: {
            type: Number,
            required: true,
            default: 0
        }
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: ObjectID,
        required: true,
        ref: 'User'
    }
})

const productSchema = new mongoose.Schema({
    // ID : {
    //    type: ObjectID,
    //    required: true,
    //    ref: 'User'
    // },
    name: {
       type: String,
       required: true,
       trim: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
        type: String,
        required: true
      },
    category: {
       type: String,
       required: true
    },
    price: {
       type: Number,
       required: true,
       default: 0
    },
    prevPrice: {
        type: Number,
        required: true
    },
    rating: {
        rate: {
            type: Number,
            required: true,
            default: 0
        },
        count: {
            type: Number,
            required: true,
            default: 0
        }
    },
    review: [reviewSchema]
    }, {
    timestamps: true
});

const product = mongoose.model('Item', productSchema);

module.exports = product;