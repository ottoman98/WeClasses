import { ReactNode, createContext, useState } from "react";
import { AuthContextType } from "../interfaces";
import requests from "../api/requests";

const context = {
  userData: {},
  signUp: (): void => {},
};

export const AuthContext = createContext<AuthContextType>(context);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState(Object);

  async function signUp(values: object) {
    const data = await requests.loginRequestStudent(values);

    setUserData(data);
  }

  return (
    <AuthContext.Provider value={{ userData, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
