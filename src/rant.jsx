import { useState, useEffect } from "react";

const Rant = () => {
  const [meal, setMeal] = useState(null);
  //www.themealdb.com/api/json/v1/1/random.php
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals[0]); // Assuming the API returns an array of meals
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {meal && (
        <div>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strCategory}</p>
        </div>
      )}

      {meal && (
        <div>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strCategory}</p>
        </div>
      )}
    </div>
  );
};

export default Rant;
