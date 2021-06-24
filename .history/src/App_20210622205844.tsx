import { createContext, useState } from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export  const AuthContex = createContext({} as any);

function App() {

  const [user, setUser] = useState();

  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    const { value, setValue } = useContext(TestContext)

    auth.signInWithPopup(provider).then(result =>{
        console.log(result);
  
        
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
