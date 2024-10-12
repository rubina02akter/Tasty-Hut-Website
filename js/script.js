// loadAllCategories

const fetchCategories = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
  const categories = data.categories;
  const container = document.getElementById('show-all-cards');
  container.innerHTML = '';

  categories.forEach(category => {
    const { strCategoryThumb, strCategory, strCategoryDescription,idMeal } = category;
    const categoryDiv = document.createElement('div');
    categoryDiv.innerHTML = `<div class="border border-gray-300 flex gap-4 rounded-lg h-[200px]">
                  <div class="flex justify-center items-center"><img class="" src=${strCategoryThumb} /></div>
      
                <div class="space-y-4 text-start pt-6">
                    <h3 class="font-bold text-lg">${strCategory}</h3>
                     <p class="text-sm text-gray-500">
                       There are many variations of passages of available, but the
                       majority have suffered
                     </p>
                     <button class="btn text-[#FFC107] border-[#FFC107] bg-white" onclick="viewModal()">
                       View Details
                     </button>
                   </div>
                 </div>`

    container.appendChild(categoryDiv);
  });
};


const viewDetails = async () => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
  const data = await res.json();
  const meal = data.meals;
  // console.log(meal);
  // console.log(data);
  // viewModal(data.meals[0]);
  // console.log(data.meals[0].strArea);
  data.meals.forEach(meal=>{
    viewModal(meal);
  })
}

const viewModal = (meal) => {
  // const {strMeal,strCategory,strArea,strInstructions,strMealThumb,strYoutube} = meal;

  // const img = document.getElementById('meal-image').innerHTML = `<img src=${meal.st}/>`
  const p1 = document.getElementById('meal-name').innerHTML = `${meal.strCategory}`;
//   const p2 = document.getElementById('meal-category').innerHTML = 
//   const p3 = document.getElementById('meal-area').innerHTML =

  my_modal_1.showModal();
}


viewDetails();

