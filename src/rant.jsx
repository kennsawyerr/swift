import { useState, useEffect } from "react";

const Rant = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then((response) => response.json())
      .then((data) => {
        const randomMeals = getRandomMeals(data.meals, 10);
        setMeals(randomMeals);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getRandomMeals = (mealsArray, count) => {
    const shuffled = mealsArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <>
      <section className="snacks-cont container">
        <h1>What Would you like to have?</h1>

        <div className="flex  snacks_flex">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="snacks">
              <h2 className="snacks_hero-title"> {meal.strMeal}</h2>
              <img
                src={meal.strMealThumb}
                className="snacks_img"
                alt={meal.strMeal}
              />
              <p>{meal.strCategory}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Rant;
