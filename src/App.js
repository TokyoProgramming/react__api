import React, {useEffect, useState} from 'react';
import './App.css';

import Recipe from "./Recipes";

function App() {
    const APP_ID = "5fa301c0";
    const APP_KEY = "64855d410e3754264084502015f12d33";

    // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    //
    // const [counter, setCounter] = useState(0);

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect( () => {
        //function
        getRecipes();
    //      ↓ how many times "function" will activate　
    },[query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data);
    }

    const updateSearch = event => {
        setSearch(event.target.value);
        console.log(setSearch)
    }

    const getSearch = event => {
        event.preventDefault();
        setQuery(search)
        setSearch('');
    }
    return (
    <div className="app">
        <form
            onSubmit={getSearch}
            className="search__form"
        >
            <input
                className="search__bar"
                type="text"
                input={search}
                onChange={updateSearch}

            />
            <button
                className="search__button"
                type="submit">
                search
            </button>
        </form>
            <div className="recipes">
                {recipes.map( recipe  => (
                    <Recipe
                        key = {recipe.recipe.label}
                        source = {recipe.recipe.source}
                        title = {recipe.recipe.label }
                        cautions = {recipe.recipe.cautions[0]}
                        calories = {recipe.recipe.calories }
                        img= {recipe.recipe.image }
                        ingredients = {recipe.recipe.ingredients}
                    />
                ))};
            </div>
    </div>
  );
}

export default App;
