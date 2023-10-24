import { ReactNode, createContext, useState } from "react";
import { AuthContextType } from "../interfaces";
import requests from "../api/requests";

const context = {
  userData: {},
  signUp: (): object => {
    return {};
  },
};

export const AuthContext = createContext<AuthContextType>(context);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState({});

  async function signUp(values: object) {
    try {
      const data = await requests.loginRequestStudent(values);

      setUserData(data);
      return data;
    } catch (error) {
      error;
    }
  }

  return (
    <AuthContext.Provider value={{ userData, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
