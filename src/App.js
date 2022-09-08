import { Routes, Route } from "react-router-dom";
import { CarDetail } from "./components/CarDetail/CarDetail";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/detail/:id"} element={<CarDetail/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
