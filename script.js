const recipes = [
     {
      name: "Classic Espresso",
        ingredients: ["18g finely ground coffee", "30ml water"],
        steps: [
            "Preheat your espresso machine.",
            "Place the finely ground coffee into the portafilter.",
            "Tamp the coffee evenly.",
            "Lock the portafilter into the machine.",
            "Start the extraction for 25-30 seconds."
        ],
        image: "https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg"
    },
    {
        name: "French Press Coffee",
        ingredients: ["30g coarsely ground coffee", "500ml hot water"],
        steps: [
            "Add the coarsely ground coffee to the French press.",
            "Pour in the hot water and stir gently.",
            "Place the lid on the French press and let it steep for 4 minutes.",
            "Press the plunger down slowly.",
            "Pour and enjoy."
        ],
        image: "https://parachutecoffee.com/cdn/shop/articles/Untitled_design_51_800x.png?v=1667752021"
    },
    {
        name: "Cold Brew Coffee",
        ingredients: ["100g coarsely ground coffee", "500ml cold water"],
        steps: [
            "Combine the coffee and cold water in a jar or pitcher.",
            "Stir well to ensure all the coffee is wet.",
            "Cover and let it steep in the fridge for 12-24 hours.",
            "Strain the coffee using a fine mesh sieve or coffee filter.",
            "Serve over ice with water or milk."
        ],
        image: "https://storage.googleapis.com/gen-atmedia/3/2018/05/9eada0d203bfb580d801b478edd553465c7afb52.jpeg"
    },
    {
        name: "Cappuccino",
        ingredients: ["18g finely ground coffee", "120ml milk"],
        steps: [
            "Brew a shot of espresso.",
            "Froth the milk using a steam wand until it’s creamy and slightly foamy.",
            "Pour the frothed milk over the espresso.",
            "Serve immediately."
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1200px-Cappuccino_at_Sightglass_Coffee.jpg"
    },
    {
        name: "Latte",
        ingredients: ["18g finely ground coffee", "240ml milk"],
        steps: [
            "Brew a shot of espresso.",
            "Steam the milk until it’s creamy with a small amount of foam.",
            "Pour the steamed milk over the espresso.",
            "Top with a thin layer of foam.",
            "Serve immediately."
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/800px-Caffe_Latte_at_Pulse_Cafe.jpg"
    },
    {
        name: "Mocha",
        ingredients: ["18g finely ground coffee", "240ml milk", "30ml chocolate syrup"],
        steps: [
            "Brew a shot of espresso.",
            "Steam the milk until it’s creamy with a small amount of foam.",
            "Add chocolate syrup to the espresso and mix well.",
            "Pour the steamed milk over the espresso-chocolate mixture.",
            "Top with a thin layer of foam and chocolate shavings.",
            "Serve immediately."
        ],
        image: "https://www.thespruceeats.com/thmb/POPhcPYBWx7fNJu8Bc7YjS-Flso=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mocha-4797918-hero-01-1-f8fb7ebd74914895b61366f6fc1d4b05.jpg"
    },
    {
        name: "Macchiato",
        ingredients: ["18g finely ground coffee", "30ml milk"],
        steps: [
            "Brew a shot of espresso.",
            "Froth the milk until it’s creamy and slightly foamy.",
            "Pour a small amount of the frothed milk over the espresso.",
            "Serve immediately."
        ],
        image: "https://roastercoffees.com/wp-content/uploads/2021/05/Espresso-Macchiato-Recipe.webp"
    },
    {
        name: "Affogato",
        ingredients: ["18g finely ground coffee", "1 scoop vanilla ice cream"],
        steps: [
            "Brew a shot of espresso.",
            "Place a scoop of vanilla ice cream in a serving glass.",
            "Pour the hot espresso over the ice cream.",
            "Serve immediately."
        ],
        image: "https://www.thespruceeats.com/thmb/5PcCBEaUd1U1eFxfcKKPLVnZzfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/affogato-4776668-hero-08-40d7a68d12ba46f48eaea3c43aba715c.jpg"
    },
    {
        name: "Irish Coffee",
        ingredients: ["18g finely ground coffee", "30ml Irish whiskey", "1 tbsp brown sugar", "30ml heavy cream"],
        steps: [
            "Brew a strong cup of coffee.",
            "Add brown sugar to the coffee and stir until dissolved.",
            "Add the Irish whiskey and stir.",
            "Top with lightly whipped heavy cream by pouring it over the back of a spoon.",
            "Serve immediately."
        ],
        image: "https://www.thespruceeats.com/thmb/BaTQiJBdsmkbQvBZO6HaoeBoNgE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/original-irish-coffee-recipe-759311-Hero-5b759d4b46e0fb005089915e.jpg"
    },
    {
        name: "Café au Lait",
        ingredients: ["18g finely ground coffee", "240ml hot milk"],
        steps: [
            "Brew a strong cup of coffee.",
            "Heat the milk until it’s hot but not boiling.",
            "Combine the coffee and hot milk in a 1:1 ratio.",
            "Serve immediately."
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6_BvjbPq4PH18XX2YQj8ISIvFK-cEmG3aA&s"
    }
];

document.getElementById("generate-btn").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];

    const recipeDiv = document.getElementById("recipe");
    recipeDiv.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <h3>Ingredients:</h3>
        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h3>Steps:</h3>
        <ol>${recipe.steps.map(step => `<li>${step}</li>`).join('')}</ol>
    `;
});

