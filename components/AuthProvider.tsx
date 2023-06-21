// React & Redux
// --------
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/auth";

// Firebase
// ---------
import "firebase/auth";
import { getAuth } from "firebase/auth";

// Firebase
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
    return <div>Yükleniyor...</div>;
  }

  return children;
};

export default AuthProvider;
