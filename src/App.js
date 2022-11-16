// styles
import GlobalStyles from "./GlobalStyles";

// pages
import Home from "./pages/Home/Home";
import { Game } from "./pages/Game/Game";

// components
import { Nav } from "./components/Nav";

// router
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} /> 
        <Route path="/games/:scoreId" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
