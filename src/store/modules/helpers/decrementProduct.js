export default function (state, product) {
  if (product.count > 0) {
    product.count -= 1;
    state.checkSum -= product.price;
  }
}
