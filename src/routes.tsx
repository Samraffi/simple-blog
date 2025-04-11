import { createBrowserRouter } from "react-router";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import App from "./App";
import RecipesPage from "./pages/RecipesPage";
import RecipePage from "./pages/RecipePage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "recipes",
        children: [
          { index: true, element: <RecipesPage /> },
          {
            path: "/recipes/:id",
            element: <RecipePage />,
          },
        ],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);