/**
 * Formats the product price according to the Turkish currency format.
 * @param {number} price product price
 */
export const currencyFormat = (price: number) => {
  const currency_symbol = "₺";
  const formattedOutput = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
  });
  return formattedOutput.format(price).replace(currency_symbol, "");
};

export const calculateCategoryTotalPrice = (cartItems: any[], key: string) => {
  const products = cartItems.reduce((acc, currentValue) => {
    let groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return acc;
  }, {});
  const categoryTotals: any = {};

  for (const category in products) {
    let total = 0;

    for (const product of products[category]) {
      total += product.price;
    }

    categoryTotals[category] = total;
  }

  return categoryTotals;
};
