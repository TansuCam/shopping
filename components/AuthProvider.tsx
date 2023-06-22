// React & Redux
// --------
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/auth";

// Firebase
// ---------
import "firebase/auth";
import { getAuth } from "firebase/auth";

// Types
// ---------
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      dispatch(setUser(user));
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="h-[calc(100vh_-_10rem)] bg-white">
        <div className="flex justify-center items-center h-full">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </div>
      </div>
    );
  }

  return children;
};

export default AuthProvider;
