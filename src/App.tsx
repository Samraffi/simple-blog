import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Layout from "./components/Layout";
import RecipePage from "./pages/RecipePage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
