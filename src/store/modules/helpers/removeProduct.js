export default function (products, product) {
	products.forEach((element, index) => {
		if (element == product) {
			products.splice(index, 1);
		}
	});
}
