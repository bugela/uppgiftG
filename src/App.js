import './Components/style.css';
import './App.css';
import React from 'react';
import Meal from './Components/Meal';
import { Routes, Route } from 'react-router-dom';
import RecipeInfo from './Components/RecipeInfo';

function App() {

  /* i give a definishin to these variables in here and need to pass them to the Meal.jsx as props. 
  const [item,setItem]=useState();
    const [show,setShow]=useState(false);
    const [search,setSearch]=useState(""); */
  return (
    <>
      <Routes>
        <Route path='/' element={<Meal />} />
        <Route path='/:MealId' element={<RecipeInfo/>}/>
      </Routes>
    </>
  );
}

export default App;


