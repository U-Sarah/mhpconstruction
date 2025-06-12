import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails.jsx";
import AllProjects from "./pages/AllProjects.jsx";
import About from "./components/About.jsx";
import Layout from "./components/Layout.jsx";
import "./index.css";
import App from "./App.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/blog/:id", element: <BlogDetails /> },
      { path: "/projects", element: <AllProjects /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
