const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProdcuts, productName) => {
  let total = 0;
  for (const nameProducts of allProdcuts) {
    if (nameProducts.name === productName) {
      total = nameProducts.price * nameProducts.quantity;
    }
  }
  return total;
};

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));

console.log(calculateTotalPrice(products, 'Захват'));

console.log(calculateTotalPrice(products, 'Сканер'));
