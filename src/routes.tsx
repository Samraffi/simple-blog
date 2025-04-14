import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from './pages/HomePage';
import ContactPage from "./pages/ContactPage";
import RecipesPage from "./pages/RecipesPage";
import RecipePage from "./pages/RecipePage";
import RecipeAddPage from "./pages/RecipeAddPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "recipes",
        children: [
          { index: true, element: <RecipesPage /> },
          { path: "add", element: <RecipeAddPage /> },
          { path: ":id", element: <RecipePage /> },
        ],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
