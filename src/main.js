let shopItem = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shopItem.innerHTML = shopItmesData.map((x) => {
        let {
            id,
            name,
            price,
            desc,
            img
        } = x;
        let search = basket.find((x)=> x.id ===id) || [];
        return `
    <div id = item-id-${id} class="item">
            <img src=${img} width="220" alt="image">
            <div class="detials">
            <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="button">
                        <i onclick ="decrement(${id})" class="fa fa-minus"></i>
                        <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                        <i onclick ="increment(${id})" class="fa fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    }).join(""));

};


generateShop();

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
   
    //console.log(basket);
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
    window.alert("Item has been removed to your cart");


    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
   //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    culculation();
};

let culculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML =basket.map((x) => x.item).reduce((x,y)=> x+y,0);
};
culculation();

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