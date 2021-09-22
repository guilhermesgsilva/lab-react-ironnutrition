import React from 'react';
import { Card, Col, Divider, Button } from "antd";

function FoodBox ({food, deleteFood}) {

    return (
        <Col>
            <Card
                title={food.name}
                style={{ width: 230, height: 300, margin: 10 }}>
                <img src={food.image} height={60} alt={food.name}/>
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                Total Calories:<b> {`${food.calories * food.servings}`} kcal</b>
                </p>
                <Button type="primary" onClick={() => deleteFood(food.name)}> Delete </Button>
            </Card>
        </Col>
    );
};

export default FoodBox;


