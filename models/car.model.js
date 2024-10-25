const { Schema, model } = require('mongoose');

const carSchema = Schema(
    {
        make: {
            type: String,
            required: [true, 'make field is required'],
        },
        model: {
            type: String,
            required: [true, 'model field is required'],
        },
        year: {
            type: Number,
            required: [true, 'year field is required'],
        },
        image_path: {
            type: String
        },
    },
    { timestamps: true }
);

module.exports = model('Car', carSchema);