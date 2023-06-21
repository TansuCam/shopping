"use client";
// React
// ---------------
import React, { FC, useEffect, useState } from "react";

// Components
// ---------------
import SvgAdd from "@/icons/Add";
import SvgCart from "@/icons/Wallet";
import SvgRemove from "@/icons/Remove";

// Redux Toolkit
// ---------------
import { AppDispatch } from "@/store";
import { addCart, removeCart } from "@/store/cart";
import { useDispatch, useSelector } from "react-redux";

// Helpers
// ---------------
import { calculateCategoryTotalPrice, currencyFormat } from "@/helpers";
import { BarChart } from "./barChart";

// Main
// ---------------
const Wallet: FC = () => {
  // Redux Hooks
  const cartItems = useSelector((state: any) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const [categoryTotal, setCategoryTotal] = useState<Record<string, unknown>>();

  const getCategoryTotal = async () => {
    const getCalculate = await calculateCategoryTotalPrice(
      cartItems?.cartItems,
      "category"
    );
    setCategoryTotal(getCalculate);
  };

  useEffect(() => {
    getCategoryTotal();
  }, [cartItems]);

  // Main component return
  return (
    <>
      <div className="bg-primary-25 h-[70px] flex items-center px-10 gap-2">
        <SvgCart width="32" height="32" />
        <div className="flex items-center gap-2 text-primary-100 font-medium">
          Cüzdanım{" "}
          <p className="text-primary-100 bg-primary-75 font-medium px-2 rounded">
            {currencyFormat(30000 - cartItems.totalAmount)} TL
          </p>
        </div>
      </div>
      <div className="mx-[45px] my-8">
        <div className="flex gap-3">
          <div className="w-7/12">
            <p className="text-primary-100 font-xl font-bold mb-3">
              Sepetinizdeki Ürünler{" "}
              {`(${currencyFormat(cartItems.totalQuantity)})`}
            </p>
            {cartItems &&
              cartItems?.cartItems?.map((items: any) => (
                <div
                  key={items.id}
                  className="flex border-2 items-center justify-between border-solid border-primary-50 rounded-md mb-2 pl-8 py-5"
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
          </div>
          <div className="w-5/12">
            <p className="text-primary-100 font-xl font-bold mb-3">
              Bakiye Bilgileri
            </p>
            <div className="border-2 border-solid border-primary-50 rounded-md mb-2 px-8 py-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-primary-100 text-sm mb-3">
                    Toplam bakiyeniz:
                  </p>
                  <p className="text-primary-100 text-sm mb-3">
                    Toplam sepet tutarınız:
                  </p>
                  <p className="text-primary-100 text-sm mb-3">
                    Kalan bakiyeniz:
                  </p>
                </div>
                <div>
                  <p className="text-primary-100 bg-primary-75 font-medium px-2 rounded mb-3">
                    {currencyFormat(30000)} TL
                  </p>
                  <p className="text-primary-100 bg-primary-75 font-medium px-2 rounded mb-3">
                    {currencyFormat(cartItems.totalAmount)} TL
                  </p>
                  <p className="text-primary-100 bg-primary-75 font-medium px-2 rounded mb-3">
                    {currencyFormat(30000 - cartItems.totalAmount)} TL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-primary-100 font-xl font-bold mb-3 mt-12">
            {" "}
            Harcamalarınızın Dağılımı{" "}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-primary-100 text-sm mb-3">Toplam harcamanız:</p>
            <p className="text-primary-100 bg-primary-75 font-medium px-2 rounded mb-3">
              {currencyFormat(cartItems.totalAmount)} TL
            </p>
          </div>
        </div>
        <div className="w-7/12 h-[350px]">
          <BarChart categoryTotalsPrice={categoryTotal} />
        </div>
        {/* Confirm Wallet */}
        <button className="btn bg-primary-50 text-white float-right py-2 w-[250px] mt-10 rounded-md">
          Sepeti Onayla
        </button>
      </div>
    </>
  );
};
export default Wallet;
