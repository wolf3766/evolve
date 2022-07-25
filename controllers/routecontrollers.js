const food=require('../models/food_item');
const meal=require("../models/meal");
const user=require("../models/user");

module.exports.food_post= async(req,res)=>{
    console.log(req.body);
  await  food.create(req.body).then(function(fooditems){
        res.send(fooditems);
    }).catch(e=>{
        res.send(e);
        console.log(e);
    });
}

module.exports.meal_post= async (req,res)=>{
    console.log(req.body);
  await  meal.create(req.body).then(function(meals){
        res.send(meals);
    }).catch(e=>{
        res.send(e);
        console.log(e);
    });
}

module.exports.user_post=(req,res)=>{
    const plan=req.body.plan;
    const meal=req.body.meal;
    const mp=new Map();
    for(let i=0;i<plan.length;i++){
        mp.set(plan[i],meal[i]);
    }
    const DATA=new user({
        name:req.body.name,
        calorieRequirement:req.body.calorieRequirement,
       mealPlan:mp
    });
    try{
    DATA.save();
    res.send("saved !");
    }catch(e){
        res.send(e);
    }
}

module.exports.meal_patch=async(req,res)=>{
        await meal.findOneAndUpdate({_id:req.params.id},{$set:{
            
            [`fooditems.${req.body.index}`]:req.body.add
        }}).then(function(meals){
            res.send(meals);
        }).catch(e=>{
            res.send(e);
            console.log(e);
        });
}

module.exports.user_meal_patch=async(req,res)=>{  // not working properly 
    await user.findOneAndUpdate({_id:req.params.id},{$set:{
        [`mealPlan.${[req.body.date[req.body.index]]}`]:req.body.add
    }}).then(function(users){
        res.send(users);
    }).catch(e=>{
        res.send(e);
        console.log(e);
    });
}

module.exports.meal_find=(req,res)=>{  // not so good. 
    food.find({
        calories:{$gt:req.body.cal-100},
        calories:{$lt:req.body.cal+100},
        protein:{$gt:req.body.cal*0.2},
        protein:{$lt:req.body.cal*0.3}, 
        limit:5
    }).sort({calories:-1,protein:-1})
    .then(function(fooditems){  
        res.send(fooditems);
    }).catch(e=>{
        res.send(e);
        console.log(e);
    });
}
