"use client";
// React & Next & Redux
// ----------
import React, { FC, useEffect, useState } from "react";

// Redux Toolkit
// ----------
import { filterByCategory, searchProducts } from "@/store/products";
import { useDispatch } from "react-redux";

// Components
// ----------
import clsx from "clsx";
import SvgSearch from "@/icons/Search";

// Main
// ----------
const ProductHeader: FC = () => {
  // States
  const [category, setCategory] = useState<string>("");

  // Redux dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByCategory(category));
  }, [category]);

  /**
   * Keeps the category name when any of the category buttons is clicked.
   * If the button is already active, it resets the state.
   * @param {string} category category for products
   */
  const changeCategory = (category: string) => {
    setCategory((prev: string) => {
      return prev !== category ? category : "";
    });
  };

  // Main component return
  return (
    <div className="bg-primary-25 h-[100px] flex items-center px-10 justify-between">
      <div className="flex items-center px-4 rounded-lg border-1 border-primary-50 border-solid w-[350px] gap-3 h-[45px]">
        <SvgSearch />
        <input
          type="text"
          placeholder="Ne alsan?"
          className="bg-transparent outline-0"
          onChange={(e) => dispatch(searchProducts(e.target.value))}
        />
      </div>
      <div>
        <button
          onClick={() => changeCategory("tecnology")}
          className={clsx(
            "text-primary-100 bg-primary-75 rounded-md h-[45px] px-7 mx-1 hover:bg-primary-50 hover:text-white",
            {
              "border-4 border-solid border-primary-50":
                category === "tecnology",
            }
          )}
        >
          Teknoloji
        </button>
        <button
          onClick={() => changeCategory("clothes")}
          className={clsx(
            "text-primary-100 bg-primary-75 rounded-md h-[45px] px-7 mx-1 hover:bg-primary-50 hover:text-white",
            {
              "border-4 border-solid border-primary-50": category === "clothes",
            }
          )}
        >
          Giyim
        </button>
        <button
          onClick={() => changeCategory("cosmetic")}
          className={clsx(
            "text-primary-100 bg-primary-75 rounded-md h-[45px] px-7 mx-1 hover:bg-primary-50 hover:text-white",
            {
              "border-4 border-solid border-primary-50":
                category === "cosmetic",
            }
          )}
        >
          Kozmetik
        </button>
        <button
          onClick={() => changeCategory("furniture")}
          className={clsx(
            "text-primary-100 bg-primary-75 rounded-md h-[45px] px-7 mx-1 hover:bg-primary-50 hover:text-white",
            {
              "border-4 border-solid border-primary-50":
                category === "furniture",
            }
          )}
        >
          Mobilya
        </button>
        <button
          onClick={() => changeCategory("accessory")}
          className={clsx(
            "text-primary-100 bg-primary-75 rounded-md h-[45px] px-7 mx-1 hover:bg-primary-50 hover:text-white",
            {
              "border-4 border-solid border-primary-50":
                category === "accessory",
            }
          )}
        >
          Aksesuar
        </button>
      </div>
    </div>
  );
};

export default ProductHeader;
