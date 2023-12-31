import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const Home = () =>{
    const [recipes, setRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);

    const userID = useGetUserID();

    useEffect(() => {

       const fetchRecipe = async () =>{
        try {
            const response = await axios.get("");
            setRecipes(response.data);
          } catch (err) {
            console.log(err);
          }
       };

const fetchSavedRecipes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
      );
      setSavedRecipes(response.data.savedRecipes);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchRecipe();
  fetchSavedRecipes();
}, []);

const saveRecipe =async (recipeID) => {
    try {
        const response = await axios.get("");
        //console.log(response);
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
};

const isRecipeSaved = (id) => savedRecipes.includes(id);


    return (
    <div>
        <h1>Recipes</h1>
        
        <ul>
            {recipes.map((recipe) => (
                <li key={recipe._id}>
                    <div>
                        <h2>{recipe.name}</h2>
                        <button onClick={() => saveRecipe(recipe._id)} disabled={isRecipeSaved(recipe._id)}>
                            {isRecipeSaved(recipe._id) ? "saved" :"save"}
                        </button>
                    </div>
                    <div className="instructions">
                        <p>{recipe.instructions}</p>
                    </div>
                    <img src={recipe.imageUrl} alt={recipe.name} />
                    <p> Cooking Time: {recipe.cookingTime} (minutes)</p>
                </li>
            ))}
        </ul>
         </div>
    );
};