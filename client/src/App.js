import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Landing from "./components/Landing/Landing.jsx";
import CreateRecipe from './components/Create-Recipe/CreateRecipe'
import DetailRecipe  from './components/Detail-Recipe/DetailRecipe'

function App(){
 return(
   <div>
     <Routes>
     <Route path="/"  element={<Landing/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/recipe" element={<CreateRecipe/>}/>
     <Route path="/recipes/:id" element={<DetailRecipe/>}/>
     </Routes>
   </div>
 )
}

export default App;
