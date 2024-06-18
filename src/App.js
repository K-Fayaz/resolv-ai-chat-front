
import { BrowserRouter as Router  , Routes , Route } from "react-router-dom";

import Login from "./Screens/Login";
import Chat from "./Screens/Chat";
import ShowMessages from "./Screens/ShowMessages";

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Chat/>} >
              <Route path=":index" element={<ShowMessages/>} />
            </Route>
          </Routes>
        </Router>
    </div> 
  );
}

export default App;
