$(document).ready(function(){
let products=[
    {
        "id":1,
        "image":"img1.jpg",
        "name":"product 1",
        "price":100
    },
    {
        "id":2,
        "image":"img1.jpg",
        "name":"product 2",
        "price":200
    },
    {
        "id":3,
        "image":"img1.jpg",
        "name":"product 3",
        "price":300
    },
    {
        "id":4,
        "image":"img1.jpg",
        "name":"product 4",
        "price":400
    },
    {
        "id":5,
        "image":"img1.jpg",
        "name":"product 5",
        "price":500
    }
];

if($('.home-section')){
    $(".shopping-item").html("");
for(i=0;i<=products.length-1;i++) {
  $(".shopping-item").append(
    `            <li class="page-item-image">
    <a href="details.html?id="${products[i].id}" title="Get Details" target="_self">
        <img src="https://image.tmdb.org/t/p/w500/${i.backdrop_path}" alt="Product">
    </a>
    </li>
    <li>
     <a href="details.html?id="${products[i].name}" title="${products[i].name}" target="_self" class="pagination-title">${products[i].name}</a>
     </li>  
     <li>
     <a href="details.html?id="${products[i].id}" title="Get Details" target="_self" class="view-details">
            view details
     </a>
     <button class="addcart" data-id="${products[i].id}">Add to cart</button>
     </li>`);  
}
}


$(".page-item").on("click","button",function(){
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

})


if($(".added-products")){
    let addedproducts = JSON.parse(localStorage.getItem("products"));
    
}



})




