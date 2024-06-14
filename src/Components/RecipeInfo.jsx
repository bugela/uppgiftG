

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeInfo = () => {
    const [item, setItem] = useState(null);
    const { MealId } = useParams();

    useEffect(() => {
        if (MealId !== "") {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
                .then(res => res.json())
                .then(data => {
                    setItem(data.meals[0]);
                })
                .catch(error => console.error('Error fetching meal:', error));
        }
    }, [MealId]);
/*this return i moved in to the Mealitem.jsx  */
    return (
        <>
            {item && (
                <>
                    <div className="content-wrapper">
                        <div className="content">
                            <img src={item.strMealThumb} alt="" />
                        </div>
                    </div>
                    <div className="recipe-details">
                        <div className="inner-content">
                            <h1>{item.strMeal}</h1>
                            <h2>The food's origin: {item.strArea}</h2>
                            <h3>Category: {item.strCategory}</h3>
                        </div>
                        <div className="ingredients">
                            <h2>Ingredients</h2>
                            <ul>
                                {Object.entries(item)
                                    .filter(([key, value]) => key.startsWith('strIngredient') && value !== null && value !== "")
                                    .map(([key, value]) => (
                                        <li key={key}>{value}: {item[`strMeasure${key.split('strIngredient')[1]}`]}</li>
                                    ))}
                            </ul>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2>
                            <p>{item.strInstructions}</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default RecipeInfo;
