import { onAuthStateChangedListener, createUserDocFromAuth } from "./utils/firebase/firebase.utils";
import Authentication from "./routes/authentication/authentication.component";
import Navigation from "./routes/navigation/navigation.component";
import CheckOut from "./routes/check-out/check-out.component";
import { setCurrentUser } from "./store/user/user.action";
import { Routes, Route } from "react-router-dom"; 
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import { useDispatch } from "react-redux";
import {  useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unscubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      };
      dispatch(setCurrentUser(user));
    });
    {/**unsubscribe is returned when the app unmounts to stop onAuthStateChanged listener from listening forever */}
    return unscubscribe; {/**useEffect() will run whatever it returns from the callback when it unmounts */}
  }, [])

  return ( 
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} /> {/**Set the index to true to show Home on the default page without navigating to it */}
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;