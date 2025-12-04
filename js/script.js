function addToCart(productName){ alert(productName + " has been added to cart!"); }

function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price, img });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}
