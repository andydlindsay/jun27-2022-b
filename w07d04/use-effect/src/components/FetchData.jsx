import axios from 'axios';
import {useEffect, useState} from 'react';

const FetchData = () => {
  const [recipes, setRecipes] = useState();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';

    const recipesPromise = axios.get(`${baseUrl}/recipes`);
    const ingredientsPromise = axios.get(`${baseUrl}/ingredients`);

    const promises = [recipesPromise, ingredientsPromise];

    Promise.all(promises)
      .then(arr => {
        console.log(arr);
        setRecipes(arr[0].data);
        setIngredients(arr[1].data);
      });

      // .then((response) => {
      //   console.log(response);
      //   setRecipes(response.data);
      //   // setRecipes([...recipes, ...response.data])
      //   // setRecipes(prev => [...prev, ...response.data])
      // });
  }, []);

  const mappedRecipes = recipes && recipes.map((recipe) => {
    return (
      <div key={recipe.id}>
        <h2>Recipe: {recipe.title}</h2>
        <h2>Ingredients: {recipe.ingredients.length}</h2>
      </div>
    );
  });

  return (
    <div>
      <h2>This is the data fetching component</h2>
      { mappedRecipes }
    </div>
  );
};

export default FetchData;
