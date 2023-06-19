// React & Next
// ---------------
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";

// Logos
// ---------------
import SvgLogo from "@/icons/Logo";
import SvgUser from "@/icons/User";
import SvgWallet from "@/icons/Wallet";
import SvgCart from "@/icons/Cart";
import { useSelector } from "react-redux";

// Main
// ---------------
const Header: FC = () => {
  // Redux hooks
  const { user } = useSelector((state: any) => state.auth);
  const cartItems = useSelector((state: any) => state.cart);

  const [isUserLogin, setIsUserLogin] = useState<boolean>(false);
  useEffect(() => {
    if (user) setIsUserLogin(true);
  }, [user]);

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

  return (
    <header className="shadow-lg mb-[3px]">
      <div className="flex items-center justify-between mx-12">
        {/* Logo */}
        <Link href="/">
          <SvgLogo width={281} height={100} />
        </Link>
        <div className="flex gap-2">
          {!isUserLogin ? (
            <>
              {/* Login Button */}
              <Link href="/login">
                <button className="flex items-center gap-2 hover:bg-primary-25 p-2 rounded-full">
                  <SvgUser width="28" height="28" />
                  <p className="text-primary-100 font-medium">Giriş Yap</p>
                </button>
              </Link>
            </>
          ) : (
            <>
              {/* User Info */}
              <button className="flex items-center gap-2 hover:bg-primary-25 p-2 rounded-full">
                <SvgUser width="28" height="28" />
                <p className="text-primary-100 font-medium">Giriş Yap</p>
              </button>

              {/* Wallet Button */}
              <Link href="/" className="flex items-center">
                <button className="flex items-center gap-2 hover:bg-primary-25 p-2 rounded-full">
                  <SvgWallet width="28" height="28" />
                  <p className="text-primary-100 font-medium">Cüzdanım</p>
                </button>
                <p className="text-primary-100 bg-primary-75 font-medium px-2 rounded">
                  {currencyFormat(30000 - cartItems.totalAmount)} TL
                </p>
              </Link>

              {/* Cart Button */}
              <Link href="/">
                <div className="bg-white p-4 flex justify-center items-center flex-wrap cursor-pointer">
                  <span className="relative inline-block">
                    <SvgCart width="28" height="28" />
                    <span className="absolute inline-flex items-center shadow-[0px_1px_#888888] justify-center px-[5px] py-[2px] leading-none rounded-full top-[-4px] right-[-4px] text-primary-100 bg-white text-[11.5px]">
                      {cartItems.totalQuantity}
                    </span>
                  </span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
