"use client";

// React & Next
// ---------------
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Redux
// ---------------
import { setError, setUser } from "@/store/auth";
import { useDispatch } from "react-redux";

// Firebase
// ---------------
import { register } from "@/firebase";

// Components
// ---------------
import LoginImg from "@/images/login.png";
import SvgLogo from "@/icons/Logo";

//
// Main
// ---------------
const Login: FC = () => {
  // States
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Redux dispatch
  const dispatch = useDispatch();
  const router = useRouter();

  // Login form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await register(email, password);
      dispatch(setUser(response.user));
      router.push("/");
    } catch (error) {
      dispatch(setError(error));
    }
  };

  // Main component return
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
            <form onSubmit={handleSubmit}>
              <div>
                <label>E-mailiniz</label>
                <br />
                <input
                  type="text"
                  className="w-[350px] bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none focus:border-primary-100"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-8">
                <label>Şifreniz</label>
                <br />
                <input
                  type="password"
                  className="w-[350px] bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none focus:border-primary-100"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn bg-[#84C7C4] w-[350px] rounded-lg py-3 text-white hover:bg-primary-100">
                {" "}
                Giriş Yap
              </button>
            </form>
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
