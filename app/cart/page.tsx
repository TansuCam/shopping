"use client";
// React
// ---------------
import React, { FC } from "react";

// Components
// ---------------
import SvgAdd from "@/icons/Add";
import SvgCart from "@/icons/Cart";
import SvgRemove from "@/icons/Remove";

// Redux Toolkit
// ---------------
import { AppDispatch } from "@/store";
import { addCart, removeCart } from "@/store/cart";
import { useDispatch, useSelector } from "react-redux";

// Main
// ---------------
const Cart: FC = () => {
  // Redux Hooks
  const cartItems = useSelector((state: any) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  /**
   * Formats the product price according to the Turkish currency format.
   * @param {number} price product price
   */
  const currencyFormat = (price: number) => {
    const currency_symbol = "₺";
    const formattedOutput = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
    });
    return formattedOutput.format(price).replace(currency_symbol, "");
  };

  // Main component return
  return (
    <>
      <div className="bg-primary-25 h-[70px] flex items-center px-10 gap-2">
        <SvgCart width="32" height="32" />
        <p className="text-primary-100 font-medium">Sepetim</p>
      </div>
      <div className="mt-8 mx-[70px]">
        {cartItems &&
          cartItems?.cartItems?.map((items: any) => (
            <div
              key={items.id}
              className="flex border-2 items-center justify-between border-solid border-primary-50 rounded-md mb-2 px-8 py-5"
            >
              {/* Product Info */}
              <div className="flex items-center gap-3">
                <img
                  alt="Placeholder"
                  className="block h-[100px] xl:h-150px] object-contain"
                  src={
                    items.url
                      ? items.url
                      : "https://ystyangin.com/wp-content/uploads/dummy-image-square.jpg"
                  }
                />
                <div>
                  <p>{items.name}</p>
                  <p className="text-[10px] text-[#349590]">
                    {items.stock} Adetle Sınırlı
                  </p>
                </div>
              </div>

              {/* Add or Remove Product */}
              <div className="flex items-center">
                <div className="bg-[#c3ecea] flex justify-center items-center flex-wrap cursor-pointer h-[32px] w-[82px] rounded-full gap-2">
                  <span
                    className="relative inline-block"
                    onClick={() => dispatch(removeCart(items))}
                  >
                    <SvgRemove width="26" height="26" />
                  </span>{" "}
                  <p className="text-[12px] text-primary-100">
                    {
                      cartItems?.cartItems.find(
                        (cartItem: any) => cartItem.id === items.id
                      )?.quantity
                    }
                  </p>
                  <span
                    className="relative inline-block"
                    onClick={() => dispatch(addCart(items))}
                  >
                    <SvgAdd width="26" height="26" />
                  </span>{" "}
                </div>
                <p className="text-sm font-bold text-[#349590] w-[100px] ml-10">
                  {currencyFormat(items.price)} TL
                </p>
              </div>
            </div>
          ))}
        {/* Confirm Cart */}
        <button className="btn bg-primary-50 text-white float-right py-2 w-[250px] mt-10 rounded-md">
          Sepeti Onayla
        </button>
      </div>
    </>
  );
};
export default Cart;
