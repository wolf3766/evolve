const express=require("express");
const router=express.Router();
const routecontroller=require('../controllers/routecontrollers');


router.post('/food',routecontroller.food_post);
router.post('/meals',routecontroller.meal_post);
router.post('/users',routecontroller.user_post);
router.patch('/meals/:id',routecontroller.meal_patch);
router.patch('/users/:id',routecontroller.user_meal_patch);
router.post('/meal-find',routecontroller.meal_find);


module.exports = router;
