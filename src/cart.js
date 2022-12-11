let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let culculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
culculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((x) => {
            let {
                id,
                item
            } = x;
            let search = shopItmesData.find((y) => y.id === id) || [];
            let {img, name, price} =search;
            return `
            <div class="shop-item">
            <img src=${img} width="100" alt="image">
            <div class="detials">
             <div class="title-price-x">
             <h4 class="title-price">
             <p>${name} </p>
             <p class="price">$ ${price} </p>
             </h4>
             <i onclick ="remove(${id})"  class="fa fa-times times"></i>
             </div>
             <div class="button">
                        <i onclick ="decrement(${id})" class="fa fa-minus"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick ="increment(${id})" class="fa fa-plus"></i>
                    </div>
            <h3>$ ${item * price}</h3>
        
             </div>
             </div>
            `;
        }).join(""));

    } else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2> Cart is Empty</h2>
        <a href="home.html">
        <button class="HomeBnt"> Back to Home</button>
        </a>
        `;
    }

};
generateCartItems();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else {
        search.item += 1;
    }
   
    generateCartItems();
    update(selectedItem.id);
    alert("Item has been added to your cart");
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if(search === undefined)return;
    else if (search.item === 0)
        return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !==0);
    //console.log(basket);
    alert("Item has been removed to your cart");
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
   //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    culculation();
    totalPrice();
};

let remove = (id) =>{
let selectedItem = id;
//console.log(selected.id);
basket = basket.filter((x)=> x.id !== selectedItem.id);
generateCartItems();
totalPrice();
culculation();
localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = ()=>{
basket =[];
generateCartItems();
culculation();
localStorage.setItem("data", JSON.stringify(basket));
};

let totalPrice =()=>{
if(basket.length !==0){
    let amount = basket.map((x)=>{
        let {item, id} =x;
        let search = shopItmesData.find((y) => y.id === id) || [];
        return item * search.price;
    }).reduce((x,y)=> x+y,0);
    //console.log(amount);
    label.innerHTML =`
    <h2> Subtotal : $ ${amount}</h2>
    <button class="checkout"> Check Out</button>
    <button onclick="clearCart()" class="remove"> Clear Cart</button>
    `
}
else return;
};
totalPrice();

document.getElementById("bars1").addEventListener("click", myFunction);
function myFunction(){
    var x = document.getElementById("sub-nav-holder");

    if(x.style.width =="100%"){
        x.style.width = "0";
        x.style.display ="none";
       
    }
    else{
        x.style.width = "100%";
        x.style.display ="block";
        
    }
}