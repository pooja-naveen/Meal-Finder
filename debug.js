function searchMeal(e) {
    e.preventDefault();
  
    
    
  
    //check for empty
    if (term.trim()) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          resultHeading.innerHTML = `<h2>search results for '${term}':</h2>`;
  
          if (data.meals === null) {
            resultHeading.innerHTML = `<p>There are no search results. Try again!</p>`;
          } else {
            mealsEl.innerHTML = data.meals
              .map(
                (meal) => `
              <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
        
        
              </div>
            </div>
              `
              )
              .join("");
          }
        });
      //clear search text
      search.value = "";
    } else {
      alert("please enter a search term");
    }
  }
  // debugger;