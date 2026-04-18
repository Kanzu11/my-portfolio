import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contacts",
    Component: ContactsPage,
  },
]);
