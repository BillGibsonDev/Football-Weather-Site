// styles
import GlobalStyles from "./GlobalStyles";

// pages
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import { UnknownPath } from "./pages/404Page";

// components
import { Nav } from "./components/Nav";

// router
import { Route, Routes } from 'react-router-dom';
import Offseason from "./pages/Offseason";

function App() {

  return (
    <>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} /> 
        <Route path="/games/:scoreId" element={<Game />} />
        <Route path="/offseason" element={<Offseason />} />
        <Route path="*" element={<UnknownPath /> }  />
      </Routes>
    </>
  );
}

export default App;
