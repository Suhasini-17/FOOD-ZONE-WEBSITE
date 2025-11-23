function displayCart(){
    let cart=JSON.parse(localStorage.getItem('cart'))|| [];
    console.log(cart);
    let cartItems=document.getElementById('cart-items')
    console.log(cartItems);
    let total=0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <h2 style="text-align:center; padding:20px;">Your cart is empty 🛒</h2>
        `;
        document.getElementById('total').innerText = `Total Bill: ₹0/-`;
        return;
    }


    cartItems.innerHTML=cart.map((item,index)=>{
        total +=item.price;
        return `
        <div class="cart-items">
        <img src=${item.img} alt="">
        <h3>${item.name} -- ₹${item.price}/-</h3>
        <button onclick="removeItem(${index})">Remove Items</button>
        </div>
        `
    }).join("");
    document.getElementById('total').innerText=`Total Bill: ₹${total}/-`
}
displayCart()

function removeItem(index){
    let cart=JSON.parse(localStorage.getItem('cart'))|| [];
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    displayCart();
}

function clearCart(){
    let ans=confirm("Are You Sure You Want To Delete All Items?")
    if(ans){
        localStorage.removeItem('cart')
        displayCart();
    }
}

function checkout(){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank You For Ordering the Food.Order Again !!❤️")
    localStorage.removeItem('cart')
    displayCart();
    window.location.href="./index.html";
}