import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      {/* <Navigation /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
