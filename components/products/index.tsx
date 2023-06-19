"use client";
// React
// ----------
import React, { FC, useEffect } from "react";

// Redux Toolkit
// ----------
import { AppDispatch } from "@/store";
import { fetchProducts } from "@/store/products";
import { useDispatch, useSelector } from "react-redux";

// Main
// ----------
const Products: FC = () => {
  // Redux hooks
  const products = useSelector((state: any) => state.products.filteredProducts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  /**
   * Formats the product price according to the Turkish currency format.
   * @param {number} price product price
   */
  function currencyFormat(price: number) {
    const currency_symbol = "₺";
    const formattedOutput = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
    });
    return formattedOutput.format(price).replace(currency_symbol, "");
  }

  // Main component return
  return (
    <div className="w-screen mx-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-6 gap-8 mb-12">
      {products.map((product: any) => (
        <article
          key={product.id}
          className="overflow-hidden rounded-lg shadow-xl"
        >
          <img
            alt="Placeholder"
            className="block h-[200px] xl:h-[250px] w-full object-contain"
            src={
              product.url
                ? product.url
                : "https://ystyangin.com/wp-content/uploads/dummy-image-square.jpg"
            }
          />

          <div className="flex justify-between px-4 py-5">
            <div>
              <p className="text">{product.name}</p>
              <p className="text-sm font-medium text-[#349590]">
                {currencyFormat(product.price)} TL
              </p>
              <p className="text-[10px] text-[#349590]">
                {product.stock} Adetle Sınırlı
              </p>
            </div>
            <div>icon</div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Products;
