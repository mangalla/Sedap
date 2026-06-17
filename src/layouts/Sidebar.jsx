import { GiDaisy } from "react-icons/gi"; 
import { MdFastfood } from "react-icons/md"; 
import { AiOutlineUnorderedList, AiOutlineWarning } from "react-icons/ai"; // Tambah AiOutlineWarning
import { FaUserAlt } from "react-icons/fa";
import {
  MdSpaceDashboard,
  MdOutlineNoEncryption,
  MdReportGmailerrorred,
} from "react-icons/md"; // Tambah Icon Error
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins-extrabold text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10 overflow-y-auto">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdSpaceDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <AiOutlineUnorderedList className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-4" to="/products" className={menuClass}>
              <MdFastfood className="mr-4 text-xl" />
              Products
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <FaUserAlt className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-5" to="/daysi" className={menuClass}>
              <GiDaisy  className="mr-4 text-xl" />
              Daysi UI
            </NavLink>
          </li>

          {/* SEPARATOR UNTUK ERROR TESTING */}
          <li className="pt-4 pb-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            Error Testing
          </li>

          <li>
            <NavLink id="menu-error-400" to="/error-400" className={menuClass}>
              <MdReportGmailerrorred className="mr-4 text-xl" />
              Error 400
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-error-401" to="/error-401" className={menuClass}>
              <MdOutlineNoEncryption className="mr-4 text-xl" />
              Error 401
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-error-403" to="/error-403" className={menuClass}>
              <AiOutlineWarning className="mr-4 text-xl" />
              Error 403
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer Tetap Sama */}
      <div id="sidebar-footer" className="mt-auto pt-10">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className=""
            src="https://avatar.iran.liara.run/public/28"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
