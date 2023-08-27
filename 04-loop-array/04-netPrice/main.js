const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
];

const newArr = []
// for( let productObj of sales) {
//     let price = productObj.price;
//     let discount = productObj.discount;
//     let netPrice = price;
//     if (discount) {
//         netPrice = price * (1 - discount);
//     }
//     const newObj = {netPrice: netPrice}
//     newArr.push(newObj);
// };

sales.forEach(obj => {
    let netPrice = obj.price * (1 - (obj.discount || 0))
    newArr.push({netPrice})
});

sales.forEach(obj => newArr.push({netPrice: obj.price * (1+ (obj.discount || 0))}));

console.log(newArr)