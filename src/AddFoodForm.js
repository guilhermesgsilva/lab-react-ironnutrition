import React, { useState } from 'react';
import { Input } from "antd";

function AddFoodForm ({addFood}) {
    const [showForm, setShowForm] = useState(false);

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = (e) => setName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handleCaloriesInput = (e) => setCalories(e.target.value);
    const handleServingsInput = (e) => setServings(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings,
        }
        addFood(newFood);
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
        
        console.log("submiting form", newFood)
    };

    const toggleShowForm = () => {
        setShowForm(!showForm);
    };

    return(
        <>
            {showForm && 
            <form onSubmit={handleFormSubmit}>
                <label>Name</label>
                <Input value={name} type="text" onChange={handleNameInput}/>
                <label>Image</label>
                <Input value={image} type="url" onChange={handleImageInput}/>
                <label>Calories</label>
                <Input value={calories} type="number" onChange={handleCaloriesInput}/>
                <label>Servings</label>
                <Input value={servings} type="number" onChange={handleServingsInput}/>
                <button type="submit">Create</button>
            </form>}
            <button onClick={toggleShowForm}>{showForm ? "Hide Form" : "Add New Food"}</button>
        </>
    )
};

export default AddFoodForm;
