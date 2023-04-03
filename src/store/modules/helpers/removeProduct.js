export default function (products, product) {
  console.log("remove");
  products.forEach((element, index) => {
    if (element == product) {
      products.splice(index, 1);
    }
  });
}
