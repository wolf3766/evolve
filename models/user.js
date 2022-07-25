const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type:String,
        required:[true]
    }, 
    calorieRequirement:{
        type: Number,
        required:[true] 
    },
    mealPlan:{
      type:Map,
      of:Array,
      required:[true]
    }
});

const User=mongoose.model("user",UserSchema);
module.exports=User;