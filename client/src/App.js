import { Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Landing from "./components/Landing.jsx";

function App(){
 return(
   <div>
     <Routes>
     <Route path="/"  element={<Landing/>}/>
     <Route path="/home" element={<Home/>}/>
     </Routes>
   </div>
 )
}

export default App;
