import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "./nav-logo.png";

interface NavProps {
    cartCount: number
}

const Nav = ({ cartCount }: NavProps) => {
    return (
        <div className="border-b border-gray-300">
            <nav className="flex justify-between gap-4 container mx-auto py-3">
                <img src={Logo} className="w-30 h-20" alt="Logo" />
                <ul className="flex  gap-4 items-center">
                    <li><a href="">Home </a></li>
                    <li><a href="">About us </a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Services</a></li>
                </ul>

                <div className="flex  gap-4 items-center">
                    <IoSearch />
                    <div className="flex items-center gap-2" aria-label={`${cartCount} items in cart`}>
                        <FaCartShopping />
                        {cartCount > 0 && (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">Login</button>
                    <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300">Signup</button>
                </div>

            </nav>
        </div>
    );
};

export default Nav;