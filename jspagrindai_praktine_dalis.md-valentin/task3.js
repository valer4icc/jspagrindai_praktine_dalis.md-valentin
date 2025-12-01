const products = [
  " Super PHONE 3000 ",
  "mega-laptop",
  "WiFi ROUTER",
  "portable-charger",
  "USB cable",
];

const normalizeAndModify = (productNames) => {
  return productNames.map((name) => {
    let cleanedName = name.trim();
    cleanedName = cleanedName.replace(/-/g, " ");
    cleanedName = cleanedName.toLowerCase();

    return cleanedName;
  });
};

const transformedProducts = normalizeAndModify(products);
console.log(transformedProducts);
