import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
/*
const Meal=({item, show, search})=>.... 
*/
const Meal=()=>{
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem]=useState();
    const [show,setShow]=useState(false);
    const [search,setSearch]=useState("");
    /*need to set error and loeading
    const [error, setError]= useState(null);
    const [loading, setLoading]= useState(true); */
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    },[url])

    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }
    /* this search funtion can be replacaed with asynchronous funtion 
    
         const searchRecipe= async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      if (!response.ok) throw new Error('search is not working!');
      const data = await response.json();
      setItem(data.meals || []);
    } catch (error) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }; 
   or 
    const searchRecipe=(evt)=>{
        if(evt.key==="Enter"){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setItem(data.meals)
            })
        }

    }
  */
    const searchRecipe=(evt)=>{
        if(evt.key==="Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
    return(
        <>
        <div className="main">
            <div className="heading">
                <h1>Search</h1>
                <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  
                    Mollitia vero rem aliquid dolores.
                     Quam omnis quos repellendus ratione amet quas dignissimos blanditiis vitae officiis quasi quod provident quis, tenetur natus.</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" 
                onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="container">
                {
                    show ? <MealItem data={item}/>:"Dose Not Exist!"
                }
            </div>
            <div className="indexContainer">
                <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>
        </>
    )
}

export default Meal;