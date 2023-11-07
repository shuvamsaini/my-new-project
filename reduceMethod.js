const products = [
    {productId:1, product:"mobile",price:22000},
    {productId:2, product:"laptop",price:32000},
    {productId:3, product:"tv",price:2300}
];

const productsPrice = products.reduce((accumulator, currentValue, index)=>{
    return accumulator + currentValue.price;
},0);
console.log(`Therefore the sum of the prices of all ${products.length} items is ${productsPrice}`);