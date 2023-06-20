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
