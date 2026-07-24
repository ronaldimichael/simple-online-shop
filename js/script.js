const cartProduct = [
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

const products = [
  {
    id: 3,
    name: "Monitor",
    price: 35000,
    quantity: 10,
  },
  {
    id: 4,
    name: "GPU",
    price: 150000,
    quantity: 2,
  },
  {
    id: 5,
    name: "Lamp",
    price: 150000,
    quantity: 10,
  },
];

function addProduct(cart, products) {
  return [...cart, ...products];
}
const newProducts = addProduct(cartProduct, products);

function findProduct(id) {
  return newProducts.find((s) => s.id === id);
}

function showProducts() {
  newProducts.forEach((product, index) => {
    return console.log(
      `ID: ${product.index + 1}\nName: ${product.name}\nPrice: ${product.price}\nQuantity: ${product.quantity}`,
    );
  });
}
