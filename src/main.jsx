import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails.jsx";
import AllProjects from "./pages/AllProjects.jsx";
import About from "./pages/about.jsx";
import Layout from "./components/Layout.jsx";
import "./index.css";
import App from "./App.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/projects" element={<AllProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
