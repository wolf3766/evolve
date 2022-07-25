const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const foodSchema=new Schema({
    name:{
        type: String,
        required:[true]
    }, 
    calories:{
        type: Number,
        required:[true]
    },
    protein:{
        type: Number,
        required:[true]
    },
    carb:{
        type:Number,
        required:[true]
    },
    fat:{
        type: Number,
        required:[true]
    },
    acceptedunits:{
     type: String,
     required:[true]
    },
    itemweight:{
        type:String,
        required:[true]
    }
});

const Fooditems=mongoose.model('fooditems',foodSchema);
module.exports=Fooditems;