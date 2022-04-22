$(document).ready(function () {
    let products = [{
            "id": 1,
            "image": "assets/images/1.webp",
            "name": "product 1",
            "price": 100,
            "description":"This is product 1.Looks really awesome try it"
        },
        {
            "id": 2,
            "image": "assets/images/2.jpeg",
            "name": "product 2",
            "price": 200,
            "description":"This is product 2.Looks really awesome try it"
        },
        {
            "id": 3,
            "image": "assets/images/3.jpg",
            "name": "product 3",
            "price": 300,
            "description":"This is product 3.Looks really awesome try it"
        },
        {
            "id": 4,
            "image": "assets/images/4.jpeg",
            "name": "product 4",
            "price": 400,
            "description":"This is product 4.Looks really awesome try it"
        },
        {
            "id": 5,
            "image": "assets/images/5.jpg",
            "name": "product 5",
            "price": 500,
            "description":"This is product 5.Looks really awesome try it"
        }
    ];

    let prod_added = JSON.parse(localStorage.getItem('products'));
    if (prod_added !== null) {
        prod_added.forEach(i => {
            console.log(i);
        })
        $(".products-added").html(prod_added.length);
        prod_added.forEach(i => {
            $(".added-items").append(`
        <ul class="shopping-item-info"> 
               <li class="shopping-item-image">
    <a href="details.html?id=${products[i].id}" title="Get Details" target="_self">
        <img src="${products[i].image}" alt="Product">
    </a>
    </li>
    <li>
     <a href="details.html?id=${products[i].id}" title="${products[i].name}" target="_self" class="product-title">${products[i].name}</a>
     </li>  
     <li>
     <a href="details.html?id=${products[i].id}" title="Get Details" target="_self" class="view-details">
            view details
     </a>
     </li>
     </ul>    
        `);
        })
    } else {
        $(".products-added").html("0");

    }

    if ($('.home-section').length > 0) {
        $(".shopping-items").html("");
        for (i = 0; i <= products.length - 1; i++) {
            $(".shopping-items").append(

                `   <ul class="shopping-item-info"> 
               <li class="shopping-item-image">
    <a href="details.html?id=${products[i].id}" title="Get Details" target="_self">
        <img src="${products[i].image}" alt="Product">
    </a>
    </li>
    <li>
     <a href="details.html?id=${products[i].id}" title="${products[i].name}" target="_self" class="product-title">${products[i].name}</a>
     </li>  
     <li>
     <a href="details.html?id=${products[i].id}" title="Get Details" target="_self" class="view-details">
            view details
     </a>
     </li>
     <li>
     <button class="addcart" data-id="${products[i].id - 1}">Add to cart</button>
     </li>
     </ul>
     `);
        }
    }


    $(".shopping-items").on("click", "button", function () {
        if (!(localStorage.getItem("products"))) {
            localStorage.setItem("products", '[]');
        }
        let newid = $(this).attr('data-id');
        let old_data = JSON.parse(localStorage.getItem("products"));
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
        localStorage.setItem("products", JSON.stringify(old_data));
        alert("added to cart");
        let prod_added = JSON.parse(localStorage.getItem("products"));
        $(".products-added").html(prod_added.length);
    })

    if ($(".details").length > 0) {
        url = new URL(window.location.href),
            urlstring = url.search.slice(1),
            searchurlparam = new URLSearchParams(urlstring),
            p_id = searchurlparam.get('id') - 1;
        $(".product-detail-info").append(`
    <ul class="shopping-item-info"> 
           <li class="shopping-item-image">
<a href="details.html?id=${products[p_id].id}" title="Get Details" target="_self">
    <img src="${products[p_id].image}" alt="Product">
</a>
</li>
<li>
 <a href="details.html?id=${products[p_id].id}" title="${products[p_id].name}" target="_self" class="product-title">${products[p_id].name}</a>
 </li>  
 <li>
 <span class="price">price:${products[p_id].price}</span>
 </li>
 <li>
        <p class="product-description">${products[p_id].description}</p>
 </li>
 </ul>    
    `);
    }

})