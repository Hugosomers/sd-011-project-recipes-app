import { fetchFood } from './FoodAPI';

export const progressRecipe = async (idReceita, type) => {
  const food = {
    meals: 'comida',
    drinks: 'bebida',
  };
  const data = await fetchFood(idReceita, type);
  let objFormatado = [];

  if (localStorage.doneRecipes) {
    objFormatado = JSON.parse(localStorage.doneRecipes);
  }

  if (!objFormatado.find((x) => x.id === idReceita)) {
    objFormatado.push({
      id: idReceita,
      type: food[type],
      area: data.strArea,
      category: data.strCategory,
      alcoholicOrNot: '',
      name: data.strMeal,
      image: data.strMealThumb,
      // doneDate: Date.now(),
      tags: data.strTags,
    });

    localStorage.setItem('inProgressRecipes', JSON.stringify(objFormatado));
  }
};

export function isRecipeDone(idReceita) {
  const data = JSON.parse(localStorage.getItem('doneRecipes'));

  const idInteiro = parseInt(idReceita, 10);
  if (data) {
    const receipt = data.find((x) => parseInt(x.id, 10) === idInteiro);
    if (receipt && parseInt(receipt.id, 10) === idInteiro) {
      return false;
    }
  }

  return true;
}

export function isRecipeInProgress(idReceita) {
  const data = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const idInteiro = parseInt(idReceita, 10);
  if (data && data.some((x) => parseInt(x.id, 10) === idInteiro)) {
    const receipt = data.find((x) => parseInt(x.id, 10) === idInteiro);
    if (receipt && parseInt(receipt.id, 10) === idInteiro) {
      return true;
    }
  }

  return false;
}

export const bookMarkRecipe = async (item) => {
  const realId = item.idDrink || item.idMeal;
  const food = {
    id: item.idDrink || item.idMeal,
    type: item.idDrink ? 'bebida' : 'comida',
    area: item.strArea || '',
    category: item.strCategory || '',
    alcoholicOrNot: item.strAlcoholic || '',
    name: item.strMeal || item.strDrink,
    image: item.strMealThumb || item.strDrinkThumb,

  };

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  if (!favoriteRecipes) {
    return localStorage.setItem('favoriteRecipes', JSON.stringify([food]));
  }

  if (favoriteRecipes.some((el) => el.id === realId)) {
    return localStorage.setItem('favoriteRecipes',
      JSON.stringify([...favoriteRecipes.filter((el) => el.id !== realId)]));
  }
  localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes, food]));
};
