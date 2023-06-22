"use client";
// React & Next
// ----------
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";

// Redux Toolkit
// ----------
import { AppDispatch, RootState } from "@/store";
import { fetchProducts } from "@/store/products";
import { useDispatch, useSelector } from "react-redux";
import SvgCartIcon from "@/icons/CartIcon";
import clsx from "clsx";
import { addCart } from "@/store/cart";
import SvgAdd from "@/icons/Add";

// Helpers
// ---------------
import { currencyFormat } from "@/helpers";
import { Product } from "./types";

// Main
// ----------
const Products: FC = () => {
  // Redux hooks
  const products = useSelector((state: RootState) => state.products.filteredProducts);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Main component return
  return (
    <div className="w-screen mx-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-6 gap-8 mb-12">
      {products.map((product: Product) => (
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

          <div className="flex justify-between items-center px-4 py-5">
            <div>
              <p className="text">{product.name}</p>
              <p className="text-sm font-medium text-[#349590]">
                {currencyFormat(product.price)} TL
              </p>
              <p className="text-[10px] text-[#349590]">
                {product.stock} Adetle Sınırlı
              </p>
            </div>

            {/* Add to cart */}
            {!user ? (
              <Link href="/login">
                <div className="bg-white p-4 flex justify-center items-center flex-wrap cursor-pointer">
                  <span className="relative inline-block">
                    <SvgCartIcon width="32" height="32" />
                    <span className="absolute inline-flex items-center justify-center px-[4px] py-[1px] leading-none rounded-full top-[0.5px] right-0 text-white text-[16px] font-medium">
                      +
                    </span>
                  </span>
                </div>
              </Link>
            ) : (
              <>
                {cartItems.find((items: Product) => items.id === product.id) ? (
                  <div
                    className="bg-[#c3ecea] flex justify-center items-center flex-wrap cursor-pointer h-[32px] w-[75px] min-w-[75px] rounded-full gap-3"
                    onClick={() => dispatch(addCart(product))}
                  >
                    <span className="relative inline-block">
                      <SvgAdd width="26" height="26" />
                    </span>{" "}
                    <span className="relative inline-block shadow-[-2px_0px_2px_#888888] rounded-full">
                      <SvgCartIcon width="30" height="30" />
                      <span className="absolute inline-flex items-center justify-center px-[4px] py-[1px] leading-none rounded-full top-[5px] right-[4px] text-primary-100 bg-white text-[10px]">
                        {
                          cartItems.find(
                            (items: Product) => items.id === product.id
                          )?.quantity
                        }
                      </span>
                    </span>
                  </div>
                ) : (
                  <div
                    className="bg-white p-4 flex justify-center items-center flex-wrap cursor-pointer"
                    onClick={() => dispatch(addCart(product))}
                  >
                    <span className="relative inline-block">
                      <SvgCartIcon width="32" height="32" />
                      <span className="absolute inline-flex items-center justify-center px-[4px] py-[1px] leading-none rounded-full top-[0.5px] right-0 text-white text-[16px] font-medium">
                        +
                      </span>
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Products;
