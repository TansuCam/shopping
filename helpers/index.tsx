import { CategoryTotalPrice } from "@/app/wallet/types";
import { Product } from "@/components/products/types";

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

export const calculateCategoryTotalPrice = (
  cartItems: Product[],
  key: keyof Product
) => {
  const products: { [category: string]: Product[] } = cartItems.reduce(
    (acc: { [category: string]: Product[] }, currentValue: Product) => {
      let groupKey = currentValue[key];
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(currentValue);
      return acc;
    },
    {}
  );

  interface CategoryTotalPrice {
    [key: string]: number;
  }

  const result: CategoryTotalPrice = {};

  for (const category in products) {
    if (products.hasOwnProperty(category)) {
      const items = products[category];
      let totalPrice = 0;

      for (const item of items) {
        totalPrice += item.price * item.quantity;
      }

      result[category] = totalPrice;
    }
  }
  return result;
};
