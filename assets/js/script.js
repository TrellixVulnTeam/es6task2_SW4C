$(document).ready(function(){
let products=[
    {
        "id":1,
        "image":"assets/images/1.webp",
        "name":"product 1",
        "price":100
    },
    {
        "id":2,
        "image":"assets/images/2.jpeg",
        "name":"product 2",
        "price":200
    },
    {
        "id":3,
        "image":"assets/images/3.jpg",
        "name":"product 3",
        "price":300
    },
    {
        "id":4,
        "image":"assets/images/4.jpeg",
        "name":"product 4",
        "price":400
    },
    {
        "id":5,
        "image":"assets/images/5.jpg",
        "name":"product 5",
        "price":500
    }
];

// let prod_added = JSON.parse(localStorage.getItem('products'));
// if(prod_added !== null) {
//     $(".products-added").html(prod_added.length);
//         prod_added.forEach(i=>{
//         $(".added-items").append(`
//         <ul class="shopping-item-info"> 
//                <li class="shopping-item-image">
//     <a href="details.html?id="${products[i].id}" title="Get Details" target="_self">
//         <img src="${products[i].image}" alt="Product">
//     </a>
//     </li>
//     <li>
//      <a href="details.html?id="${products[i].name}" title="${products[i].name}" target="_self" class="pagination-title">${products[i].name}</a>
//      </li>  
//      <li>
//      <a href="details.html?id="${products[i].id}" title="Get Details" target="_self" class="view-details">
//             view details
//      </a>
//      </li>
//      </ul>    
//         `);
//     })
// }else {
//     $(".products-added").html("0");

// }

if($('.home-section').length > 0){
    $(".shopping-items").html("");
for(i=0;i<=products.length-1;i++) {
  $(".shopping-items").append(

    `   <ul class="shopping-item-info"> 
               <li class="shopping-item-image">
    <a href="details.html?id="${products[i].id}" title="Get Details" target="_self">
        <img src="${products[i].image}" alt="Product">
    </a>
    </li>
    <li>
     <a href="details.html?id="${products[i].name}" title="${products[i].name}" target="_self" class="pagination-title">${products[i].name}</a>
     </li>  
     <li>
     <a href="details.html?id="${products[i].id}" title="Get Details" target="_self" class="view-details">
            view details
     </a>
     </li>
     <button class="addcart" data-id="${products[i].id}">Add to cart</button>
     </ul>
     `);  
}
}


$(".shopping-items").on("click","button",function(){
    if(!(localStorage.getItem("products"))) {
        localStorage.setItem("products",'[]');
    }
    let newid= $(this).attr('data-id');
     let old_data =JSON.parse(localStorage.getItem("products"));
     console.log(old_data);
     let repeated_id = false;
    old_data.forEach(i => {
      if (i === newid) {
        repeated_id = true;
      }
    })
    if (repeated_id === false) {
      old_data.push(newid);

    }
    localStorage.setItem("products",JSON.stringify(old_data));
    alert("added to cart");
    let prod_added = JSON.parse(localStorage.getItem("products"));
     $(".products-added").html(prod_added.length);
})

})




