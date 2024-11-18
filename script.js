const productContainer = document.getElementById("product-container");
// Data Fatching
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const products = data.products;
    products.map(
      (product) =>
        (productContainer.innerHTML += `<div class='product w-23'>
         <div class='thumbnail'>
         <img src=${product.thumbnail} alt="Product">
         </div>
         <div class='details'>
         <h4>${product.title}</h4>
         <div class='description'>${product.description}</div>
         <p class='price'>$${product.price}</p>
         </div>
         </div>`)
      // console.log(product);
    );
    // console.log(products);
  });