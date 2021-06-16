const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dpSchema = new Schema({
    index:{
        type: Number
    },
    name :{
        type: String
    },
    last :{
        type: String
    },
    buy : {
        type : String
    },
    sell : {
        type : String
    },
    volume : {
        type : String
    },
    base_unit : {
        type : String
    }
});

const Dp = mongoose.model('dp', dpSchema);

module.exports = Dp;