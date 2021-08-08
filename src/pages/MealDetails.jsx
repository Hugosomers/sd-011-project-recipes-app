import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
import RecipeCard from '../components/RecipeCard';
import IngredientsList from '../components/IngredientsList';
import { APImealById } from '../services/APImealsANDdrinks';

// Falta implementar o await da promise;
// corrigir rota e colocar o barra que está faltando. Ver se é encessario
// Adicionar loading

function MealDetails({ match: { params } }) {
  const MAGIC6 = 6;
  const { drinks } = useContext(UserContext);
  const [MealDataAPI, setMealDadaAPI] = useState({});
  useEffect(() => {
    const { id } = params;
    const requestMeal = async () => {
      const response = await APImealById(id);
      setMealDadaAPI(response.meals[0]);
    };
    requestMeal();
  }, []);

  return (
    <div>
      <RecipeCard
        title={ MealDataAPI.strMeal }
        img={ MealDataAPI.strMealThumb }
        category={ MealDataAPI.strCategory }
        id={ MealDataAPI.idMeal }
      />

      <IngredientsList meal={ MealDataAPI } />

      <p data-testid="instructions">
        <h2>Instructions</h2>
        {MealDataAPI.strInstructions}
      </p>

      {(MealDataAPI.strYoutube) ? (
        <div className="embed-responsive embed-responsive-16by9">
          <h2>Video</h2>
          <iframe
            src={ MealDataAPI.strYoutube.replace('watch?v=', 'embed/') }
            data-testid="video"
            title="recipe Video"
            className="embed-responsive-item"
            allowFullScreen
          />
        </div>
      ) : <h2>Loading</h2>}

      <h2>Recomendadas</h2>
      {
        drinks.map((drink, index) => (
          (index < MAGIC6) ? (
            <RecipeCard
              key={ index }
              title={ drink.strDrink }
              img={ drink.strDrinkThumb }
              category={ drink.strAlcoholic }
              id={ drink.idDrink }
              data-testid={ `${index}-recomendation-card` }
            />
          ) : null))
      }

      <button type="button" data-testid="start-recipe-btn">
        Iniciar Receita
        {/* no click desse botão muda a url e envia apra o receitas em prograsso que ira usar o card da receita e no lugar de ingredientes irá colocar os checkbox. */}
      </button>
    </div>
  );
}

export default MealDetails;

// corrigir proptypes
MealDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  // params: PropTypes.objectOf(PropTypes.object).isRequired,
  // id: PropTypes.string.isRequired,
};
