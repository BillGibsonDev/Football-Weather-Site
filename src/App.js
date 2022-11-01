// styles
import GlobalStyles from "./GlobalStyles";

// pages
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";

// router
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <GlobalStyles />
      <Routes>
          <Route path='/' exact element={<Home />} /> 
          <Route path="/games/:scoreId" element={<Game />} />
      </Routes>

    </>
  );
}

export default App;
