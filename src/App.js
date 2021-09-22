// import logo from './logo.svg';
import './App.css';
import foodsJSON from './foods.json';
import React, {useState} from "react";
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [filteredFoods, setFilteredFoods] = useState(foodsJSON);


  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  const deleteFood = (name) => {
    setFilteredFoods(foods.filter((food) => food.name !== name));
    setFoods(foods.filter((food) => food.name !== name));
  };

  const filterFoods = (search) => {
    console.log(search);
    setFilteredFoods(foods.filter((food) => food.name.includes(search)))
  };

  return (
      <div className="App">
        <h1>Add Food Entry</h1>
        <AddFoodForm addFood={addFood}/>
        <h1>Search</h1>
        <Search filterFoods={filterFoods}/>        
        <h1>Food List</h1>
        {filteredFoods.map((food) => {
          return (
            <FoodBox food={food} deleteFood={deleteFood} />
          )
        })}
        {foods.length === 0 &&
            <h2>Oops! There is no more content to show.</h2>
        }
      </div>
      
  );
}

export default App;
