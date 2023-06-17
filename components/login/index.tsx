//
// React & Next
// ---------------
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

// Components
// ---------------
import LoginImg from "@/images/login.png";
import SvgLogo from "@/icons/Logo";

//
// Main
// ---------------
const Login: FC = () => {
  return (
    <>
      <div className="bg-[#edf9f8] flex justify-center">
        <div className="container py-[100px] flex flex-wrap items-center md:justify-center">
          {/* Login Illustration Image */}
          <Image className="w-1/2" src={LoginImg} alt="Picture of the author" />
          {/* Login Form */}
          <div className="xl:ml-[150px]">
            <p className="text-[#84c7c4] text-4xl mb-10 sm:my-12">
              En uygun fiyatlara ulaşmak <br /> için giriş yapın!
            </p>
            <div>
              <label>E-mailiniz</label>
              <br />
              <input
                type="text"
                className="w-[350px] bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none focus:border-primary-100"
              />
            </div>
            <div className="my-8">
              <label>Şifreniz</label>
              <br />
              <input
                type="password"
                className="w-[350px] bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none focus:border-primary-100"
              />
            </div>
            <button className="btn bg-[#84C7C4] w-[350px] rounded-lg py-3 text-white hover:bg-primary-100">
              {" "}
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="p-12">
        <SvgLogo width="185" height="66" />
        <p className="xl:w-1/2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          malesuada dapibus ut pulvinar neque arcu, commodo. Pharetra nisi
          egestas nisi fermentum. Sollicitudin egestas senectus pellentesque
          enim mauris vel odio commodo. Pellentesque orci vestibulum sed in
          molestie consequat.{" "}
        </p>
      </footer>
    </>
  );
};

export default Login;
