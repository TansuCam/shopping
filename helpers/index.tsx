// Types
// --------
import { Product } from "@/components/products/types";

// Helpers
// --------

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

/**
 * It gives the price distribution of the products 
 * added to the cart according to the category.
 * @param {Product[]} cartItems product list
 * @param {keyof Product} key key
 */
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
