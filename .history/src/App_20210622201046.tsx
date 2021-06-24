import { NewRoom } from "./pages/NewRoom";
import { BrowserRouter,Route} from 'react-router-dom';
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
