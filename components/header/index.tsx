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
  const {user} = useSelector((state: any) => state.auth);
  
  const [isUserLogin, setIsUserLogin] = useState<boolean>(false);
  useEffect(() => {
    if (user) setIsUserLogin(true);
  }, [user]);

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
              <Link href="/">
                <button className="flex items-center gap-2 hover:bg-primary-25 p-2 rounded-full">
                  <SvgWallet width="28" height="28" />
                  <p className="text-primary-100 font-medium">Cüzdanım</p>
                  <p className="text-primary-100 bg-primary-75 font-medium px-2 rounded">
                    30.000,00 TL
                  </p>
                </button>
              </Link>

              {/* Cart Button */}
              <Link href="/">
                <button className="flex items-center gap-2 hover:bg-primary-25 p-2 rounded-full">
                  <SvgCart width="28" height="28" />
                  <p className="text-primary-100 font-medium">Sepetim</p>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
