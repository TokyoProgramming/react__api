import React from "react";
import style from './recipe.module.css'

function Recipe({title, calories, img, ingredients, source, cautions}){
    return (
        <div className={style.recipe}>
            <h1>{ title }</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{ source }</p>
            <p>{ cautions }</p>
            <p>{calories}</p>
            <img
                className={style.image}
                src={ img }
                alt=""
            />

        </div>
    );
};




export default Recipe;
