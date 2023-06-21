// React & Next & Redux
// ---------------
import React, { FC } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/auth";

// Logos
// ---------------
import SvgLogo from "@/icons/Logo";
import SvgUser from "@/icons/User";
import SvgWallet from "@/icons/Wallet";
import SvgCart from "@/icons/Cart";

// Helpers
// ---------------
import { currencyFormat } from "@/helpers";

// Main
// ---------------
const Header: FC = () => {
  // Redux hooks
  const dispatch = useDispatch();
  
  const user = useSelector((state: any) => state.auth.user);
  const cartItems = useSelector((state: any) => state.cart);

  return (
    <header className="shadow-lg mb-[3px]">
      <div className="flex items-center justify-between mx-12">
        {/* Logo */}
        <Link href="/">
          <SvgLogo width={281} height={100} />
        </Link>
        <div className="flex gap-2">
          {!user ? (
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
              <button
                className="flex items-center gap-2 hover:bg-primary-25 p-2 rounded-full"
                onClick={() => dispatch(logout())}
              >
                <SvgUser width="28" height="28" />
                <p className="text-primary-100 font-medium">Giriş Yap</p>
              </button>

              {/* Wallet Button */}
              <Link href="/wallet" className="flex items-center">
                <button className="flex items-center gap-2 hover:bg-primary-25 p-2 rounded-full">
                  <SvgWallet width="28" height="28" />
                  <p className="text-primary-100 font-medium">Cüzdanım</p>
                </button>
                <p className="text-primary-100 bg-primary-75 font-medium px-2 rounded">
                  {currencyFormat(30000 - cartItems.totalAmount)} TL
                </p>
              </Link>

              {/* Cart Button */}
              <Link href="/cart">
                <div className="bg-white p-4 flex justify-center items-center flex-wrap cursor-pointer gap-2">
                  <span className="relative inline-block">
                    <SvgCart width="28" height="28" />
                    <span className="absolute inline-flex items-center shadow-[0px_1px_#888888] justify-center px-[5px] py-[2px] leading-none rounded-full top-[-4px] right-[-4px] text-primary-100 bg-white text-[11.5px]">
                      {cartItems.totalQuantity}
                    </span>
                  </span>
                  <p className="text-primary-100 font-medium">Sepetim</p>
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
