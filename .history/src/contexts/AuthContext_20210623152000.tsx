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
    children: ReactNode;
  }

export  const AuthContex = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps){

    useEffect(() => {
        const unsubscribe =  auth.onAuthStateChanged(user =>{
          
          if(user){
            const { displayName, photoURL, uid} = user
    
            if(!displayName || !photoURL){
              throw new Error('Missing information from Google Account.');
            }
    
            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL
            })
          }
        })
    
        return () =>{
          unsubscribe();
        }
      }, [])
      const [user, setUser] = useState<User>();
    
      async function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
    
        const result = await  auth.signInWithPopup(provider);
    
          if(result.user){
            const { displayName, photoURL, uid} = result.user
    
            if(!displayName || !photoURL){
              throw new Error('Missing information from Google Account.');
            }
    
            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL
            })
          }
    
        
    
      }

    return(
        <AuthContex.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContex.Provider>
    );
}