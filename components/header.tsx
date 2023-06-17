// React & Next
// ---------------
import React, { FC } from "react";
import Link from "next/link";

// Logos
// ---------------
import SvgLogo from "@/icons/Logo";
import SvgUser from "@/icons/User";

// Main
// ---------------
const Header: FC = () => {
  return (
    <header className="shadow-lg">
      <div className="flex items-center justify-between mx-12">
        <Link href="/">
          <SvgLogo width={281} height={100} />
        </Link>
        <div>
          <button className="flex items-center gap-2 hover:bg-primary-25 p-2 rounded-full">
            <SvgUser width='28' height='28' />
            <p className="text-primary-100 font-medium">Giriş Yap</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
