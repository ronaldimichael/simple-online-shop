// ✅ addProduct()
// ✅ findProduct()
// ⏭️ removeProduct(cart, id) → belajar filter()
// ⏭️ updateQuantity(cart, id, quantity) → belajar map()
// ⏭️ updatePrice(cart, id, price) → memperkuat map()
// ⏭️ getTotalItems(cart) → belajar reduce()
// ⏭️ getTotalPrice(cart) → belajar reduce()
import { productsToAdd } from "/js/data.js";

window.cartProduct = [
  {
    id: 1,
    name: "Mouse",
    price: 150000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 300000,
    quantity: 2,
  },
];

window.newProducts = addProduct(cartProduct, productsToAdd);

function addProduct(cart, products) {
  return [...cart, ...products];
}

function findProduct(cart, id) {
  return cart.find((s) => s.id === id);
}

function showProducts(cart) {
  cart.forEach((product, index) => {
    return console.log(
      `ID: ${index + 1}\nName: ${product.name}\nPrice: ${product.price}\nQuantity: ${product.quantity}`,
    );
  });
}

function updateQuantity(cart, id, quantity) {}

function removeProduct(cart, id) {
  return cart.filter((product) => product.id !== 6);
}
window.removeProduct = removeProduct;
window.addProduct = addProduct;
window.findProduct = findProduct;
window.showProducts = showProducts;
