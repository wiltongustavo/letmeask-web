type User ={
    id: string;
    name: string;
    avatar: string;
  
  }
  
  type AuthContextType = {
      user: User;
      signInWithGoogle: () => Promise<void>;
  }
  

export  const AuthContex = createContext({} as AuthContextType);


export function AuthContextProvider(){
    return(

    );
}