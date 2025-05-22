
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative bg-white overflow-x-hidden">
      {!isHome && <NavBar isHome={isHome} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
