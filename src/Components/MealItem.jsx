import React from "react";
import { useNavigate } from "react-router-dom";

/*const [item, setItem] = useState(null);*/
const MealItem = ({ data }) => {
    console.log(data)
    let navigate=useNavigate();
    /*meal item and the recipe can be retun as same div under here i guess 
    return (
        <div className="card">
            <img src={item.strMealThumb}></img>
            <div className="inner-content">
                <h1>{item.strMeal}</h1>
                <h2>The food's origin: {item.strArea}</h2>
                <h3>Category: {item.strCategory}</h3>
            </div>
        </div>
       <div className="recipes">
            <h2>Recipes</h2>
            <p>{item.strInstructions}</p>
        </div>

    )
    
    */ 
    return (
        <>
             {
                (!data) ? "Not Found!" : data.map(item => {
                    return (
                        <div className="card" key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                            <img src={item.strMealThumb} alt="" />
                            <h3>{item.strMeal}</h3>
                        </div>
                    )
                })
            }

        </>
    )
}

export default MealItem