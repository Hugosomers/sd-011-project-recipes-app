import PropTypes from 'prop-types';
import React from 'react';

export default function Ingredients({ recipe, inProgress }) {
  const ingredientsKeys = Object.keys(recipe).reduce((acc, cur) => {
    if (cur.includes('strIngredient')) {
      return [...acc, cur];
    }
    return acc;
  }, []);
  const measureKeys = Object.keys(recipe).reduce((acc, cur) => {
    if (cur.includes('strMeasure')) {
      return [...acc, cur];
    }
    return acc;
  }, []);

  const ingredients = measureKeys.reduce((acc, cur, index) => {
    if (recipe[cur] && recipe[cur].length > 1) {
      const obj = { name: recipe[ingredientsKeys[index]], measure: recipe[cur] };
      return [...acc, obj];
    }
    return acc;
  }, []);

  function checkedIgredient({ target: { checked, parentNode } }) {
    if (checked) {
      parentNode.style.textDecoration = 'line-through';
    } else {
      parentNode.style.textDecoration = 'none';
    }
  }

  return (
    <ol>
      {
        ingredients.map(({ name, measure }, index) => (
          (inProgress) ? (
            <label key={ index } htmlFor={ name }>
              <input
                onClick={ checkedIgredient }
                type="checkbox"
                id={ name }
                data-testid={ `${index}-ingredient-step` }
              />
              { name }
            </label>
          ) : (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${name} - ${measure}` }
            </li>
          )
        ))
      }
    </ol>
  );
}

Ingredients.propTypes = {
  recipe: PropTypes.isRequired,
  inProgress: PropTypes.isRequired,
};

// data-testid*="ingredient-step";
