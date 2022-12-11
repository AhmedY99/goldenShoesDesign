
let productSearch = document.getElementById("productList");


let generateShop = () => {
    return (productSearch.innerHTML = shopItmesData.map((x) => {
        let {
            id,
            name,
            price,
            img
        } = x;
        console.log("search Item");
       
        return `
         <div id = item-id-${id} class="product-search">
            <img src=${img} alt="image">
            <div class="produect-detail">
            <a href="index.html"><h2>${name}</h2></a>
                <h3>$ ${price}</h3>
            </div>
        </div>
           
    `;
    }).join(""));

};


generateShop();

function search() {
    // Declare variables
    var input, filter, li, txtValue;
    input = document.getElementById('input-search');
    filter = input.value.toUpperCase();
   
    li = productSearch.getElementsByTagName('div');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      h2 = li[i].getElementsByTagName("h2")[0];
      txtValue = h2.textContent || h2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}


