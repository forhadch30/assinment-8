import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Layout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
        </div>
    );
};

export default Layout;