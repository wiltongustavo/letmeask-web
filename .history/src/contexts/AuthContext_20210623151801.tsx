import { createContext, ReactNode } from "react";

type User ={
    id: string;
    name: string;
    avatar: string;
  
  }
  
  type AuthContextType = {
      user: User;
      signInWithGoogle: () => Promise<void>;
  }
  
  type AuthContextProviderProps{
    children: string;
  }

export  const AuthContex = createContext({} as AuthContextType);


export function AuthContextProvider(props: AuthContextProviderProps){
    return(
        <AuthContex.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContex.Provider>
    );
}