import { createContext, useState, useEffect } from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';


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

function App() {


  useEffect(() => {
    auth.onAuthStateChanged(user =>{
      if(user){
        if(result.user){
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

  return (
    <BrowserRouter>
      <AuthContex.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </AuthContex.Provider>
    </BrowserRouter>
  );
}

export default App;
