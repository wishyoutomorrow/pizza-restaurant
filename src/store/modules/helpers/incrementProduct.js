export default function (state, product) {
  product.count += 1;
  state.checkSum += product.price;
}
