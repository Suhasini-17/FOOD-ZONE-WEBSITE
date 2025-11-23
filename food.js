let foods = [
    {
    id: 1,
    name: "Pepperoni Pizza",
    price: 249,
    category: "Pizza",
    img: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_incoming&w=740&q=80",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 179,
    category: "Pizza",
    img: "https://w1.pngwing.com/pngs/234/725/png-transparent-pizza-margherita-pizza-vegetarian-cuisine-italian-cuisine-food-pizza-capricciosa-ingredient-tomato-sauce.png",
  },
  {
    id: 3,
    name: "Chicken Burger",
    price: 169,
    category: "Burger",
    img: "https://www.citypng.com/public/uploads/preview/chicken-burger-with-flying-ingredients-hd-transparent-png-701751710853243v9zgwqwepn.png?v=2025081610",
  },
  {
    id: 4,
    name: "Double Cheese Burger",
    price: 199,
    category: "Burger",
    img: "https://image.similarpng.com/file/similarpng/very-thumbnail/2022/01/Delicious-large-double-burger-with-vegetables-on-transparent-background-PNG.png",
  },
  {
    id: 5,
    name: "Hyderabadi Biryani",
    price: 279,
    category: "Biryani",
    img: "https://icon2.cleanpng.com/lnd/20240418/lwk/transparent-hyderabadi-biryani-indian-cuisine-chicken-and-vege-traditional-indian-chicken-and-vegetable-dish-with6621c16915d899.06870080.webp",
  },
  {
    id: 6,
    name: "Egg Biryani",
    price: 179,
    category: "Biryani",
    img: "https://img.freepik.com/premium-psd/delicious-egg-biryani-indian-cuisine-spicy-rice-dish_84443-44562.jpg",
  },
  {
    id: 7,
    name: "Veg Spring Rolls",
    price: 129,
    category: "Rolls",
    img: "https://e7.pngegg.com/pngimages/844/483/png-clipart-spring-rolls-on-white-tissue-spring-roll-egg-roll-samosa-stuffing-paratha-samosa-food-recipe.png",
  },
  {
    id: 8,
    name: "Chicken Kathi Roll",
    price: 159,
    category: "Rolls",
    img: "https://e7.pngegg.com/pngimages/211/845/png-clipart-wrap-vegetarian-cuisine-burrito-kati-roll-taquito-chicken-wrap-food-recipe-thumbnail.png",
  },
  {
    id: 9,
    name: "Chocolate Brownie",
    price: 99,
    category: "Desserts",
    img: "https://icon2.cleanpng.com/lnd/20240914/zr/33e52e3d086616cdc30a9edb89abc8.webp",
  },
  {
    id: 10,
    name: "Vanilla Cupcake",
    price: 79,
    category: "Desserts",
    img: "https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlM19wcm9mZXNzaW9uYWxfZGVzc2VydF9waG90b2dyYXBoeV9vZl9hbl9pc29sYXRlZF85OWRkMTk1YS01NjdmLTQ5N2UtOTVmNC1iMjA4NzkxNDFhYTIucG5n.png",
  },
  {
    id: 11,
    name: "Oreo Shake",
    price: 149,
    category: "Drinks",
    img: "https://img.freepik.com/premium-psd/chocolate-milkshake-with-chocolate-frosting-chocolate-cookies_605423-174484.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 12,
    name: "Fruit Punch",
    price: 119,
    category: "Drinks",
    img: "https://icon2.cleanpng.com/20231125/ryw/transparent-fruit-punch-fresh-fruits-orange-slices-lemon-slice-image-bright-vibrant-fruit-punch-with-fresh-1710997522806.webp",
  },
  {
    id: 13,
    name: "Chicken Popcorn",
    price: 139,
    category: "Starters",
    img: "https://p7.hiclipart.com/preview/82/102/547/chicken-nugget-kfc-kentucky-fried-chicken-popcorn-chicken-fried-chicken.jpg",
  },
  {
    id: 14,
    name: "Garlic Bread",
    price: 99,
    category: "Starters",
    img: "https://e7.pngegg.com/pngimages/368/969/png-clipart-garlic-bread-baguette-pizza-bruschetta-dish-pizza-food-recipe.png",
  },
  {
    id: 15,
    name: "Paneer 65",
    price: 159,
    category: "Starters",
    img: "https://img.freepik.com/premium-psd/paneer-tikka-masala-black-bowl-top-view-isolated-transparent-background_220739-155871.jpg?semt=ais_hybrid&w=740&q=80",
  },
   {
    id: 16,
    name: "BBQ Chicken Pizza",
    price: 289,
    category: "Pizza",
    img: "https://img.freepik.com/premium-psd/bbq-chicken-pizza-png-with-transparent-background_484256-3016.jpg",
  },
  {
    id: 17,
    name: "Peri Peri Fries",
    price: 119,
    category: "Starters",
    img: "https://storage.googleapis.com/shy-pub/360704/periperifrenchfries-1717741483544.png",
  },
  {
    id: 18,
    name: "Butter Chicken Roll",
    price: 169,
    category: "Rolls",
    img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlMV9yZWFsaXN0aWNfcGhvdG9fb2ZfYV9yZWFsX2NydXNoeV9rZWJhYl9yb2xsX2lzb184NGVjOTY3Yy0xMjg1LTRlZmYtYTJiZi03Yzk1NTQzMTUyNjEucG5n.png",
  },
  {
    id: 19,
    name: "Strawberry Ice Cream",
    price: 99,
    category: "Desserts",
    img: "https://www.citypng.com/public/uploads/preview/strawberry-ice-cream-glass-bowl-png-image-735811696436569y4phfiupye.png?v=2025082112",
  },
  {
    id: 20,
    name: "Blue Lagoon",
    price: 129,
    category: "Drinks",
    img: "https://png.pngtree.com/png-vector/20250320/ourlarge/pngtree-classic-blue-lagoon-cocktail-with-a-stylish-look-png-image_15786733.png",
  },
];

console.log(foods);
let filterFoods=foods;

function displayFood(){
    let item=document.getElementById("food-list")
    console.log(item);
    item.innerHTML=filterFoods.map((food)=>`
    <div class="food-card">
        <img src=${food.img} alt =${food.name}>
        <h3>${food.name} --₹${food.price}</h3>
        <button onclick="addToCart(${food.id})">Add to Cart</button>
    </div>
`).join("")
}
displayFood()

function applyFilter(){
    let cat=document.getElementById('category').value;
    let text=document.getElementById('searchBox').value.toLowerCase();
    console.log(cat,text);

    filterFoods=foods.filter((f)=>{
    let matchingCategory = cat ==="All"||f.category===cat;
    let matchingSearch=f.name.toLowerCase().includes(text);
    console.log(matchingCategory);
    return matchingCategory && matchingSearch;
})

displayFood()
}

function addToCart(id){
  let cart=JSON.parse(localStorage.getItem('cart'))||[]
  let item=foods.find((f)=>f.id===id);
  cart.push(item);
  localStorage.setItem('cart',JSON.stringify(cart))
  alert(`${item.name}added to cart`)
}
