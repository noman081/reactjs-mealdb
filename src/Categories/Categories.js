import React, { useEffect, useState } from 'react';
import './Categories.css';
const Categories = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setMeals(data.categories));
    }, []);
    return (
        <div>
            <h1>Welcome to food section.</h1>
            <div className='meals'>
                {
                    meals.map(meal => <Meal key={meal.idCategory} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

function Meal(props) {
    const { strCategoryThumb, strCategory, strCategoryDescription } = props.meal;
    return (
        <div className='meal'>
            <img src={strCategoryThumb} alt="" />
            <h2>{strCategory}</h2>
            {/* <p>{strCategoryDescription}</p> */}
        </div>
    );
}

export default Categories;