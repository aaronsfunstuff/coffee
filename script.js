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
        ]
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
        ]
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
        ]
    },
    {
        name: "Cappuccino",
        ingredients: ["18g finely ground coffee", "120ml milk"],
        steps: [
            "Brew a shot of espresso.",
            "Froth the milk using a steam wand until it’s creamy and slightly foamy.",
            "Pour the frothed milk over the espresso.",
            "Serve immediately."
        ]
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
        ]
    }
];

document.getElementById("generate-btn").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];

    const recipeDiv = document.getElementById("recipe");
    recipeDiv.innerHTML = `
        <h2>${recipe.name}</h2>
        <h3>Ingredients:</h3>
        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h3>Steps:</h3>
        <ol>${recipe.steps.map(step => `<li>${step}</li>`).join('')}</ol>
    `;
});
