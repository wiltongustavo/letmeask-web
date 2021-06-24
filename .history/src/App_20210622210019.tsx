import { createContext, useState } from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';

export  const AuthContex = createContext({} as any);

function App() {

  const [user, setUser] = useState();

  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result =>{
      if(result.user){
        const { displayName, photoURL, uid} = result.user
        
      }

    })

  }

  return (
    <BrowserRouter>
      <AuthContex.Provider value={{value, setValue}}>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </AuthContex.Provider>
    </BrowserRouter>
  );
}

export default App;
