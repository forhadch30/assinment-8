import { NavLink } from "react-router-dom";
import Img from "../Img/Img";
const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-3 px-5">
                <Img></Img>
                <ul className="flex gap-5">
                    <li>
                      <NavLink to="/"className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A;] underline " : ""}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/donation"className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A;] underline " : ""}>Donation</NavLink>
                    </li>
                    <li>
                      <NavLink to="/statistics"className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A;] underline " : ""}>Statistics</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;