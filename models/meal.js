const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const mealSchema=new Schema({
    category:{
        type:String,
        required:[true]
    },
    name:{
        type:String,
        required:[true]
    },
    fooditems:[{
        type:String
    }]
});

const Meals=mongoose.model("meals",mealSchema);
module.exports=Meals;
