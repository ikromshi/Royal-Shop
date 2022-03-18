import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>Start shopping</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />}></Route> {/**index(=true) tell the page to load the Home with Navigation */}
        <Route path="shop" element={<Shop />}></Route> 
          {/**child el doesn't require a /; import { Outlet } to make it stay */}
      </Route>
    </Routes>
  )
}

export default App;
