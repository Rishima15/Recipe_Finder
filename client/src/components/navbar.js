import { Link } from "react-router-dom";

export const Navbar = () =>{
    
    return (
    <div className="navbar">
        <Link to="/"> Home</Link>
        <Link to="/create_recipe"> CreateRecipe</Link>
        <Link to="/saved_recipes"> Saved Recipes</Link>
        <Link to="/auth"> Login/Register</Link>

    </div>
    );
};