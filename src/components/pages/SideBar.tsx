import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
  const menuItems = [
    { to: "/dashboard", label: "Dashboard", icon: DashboardIcon },
    { to: "/customers", label: "Customers", icon: PeopleIcon },
    { to: "/add-customer", label: "Add Customer", icon: AddCircleIcon },
  ];

  return (
    <aside className="flex flex-col w-50 bg-white border-r border-gray-200">
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg transition-colors
                   ${
                     isActive
                       ? "bg-teal-100 text-teal-700"
                       : "text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                   }`
                }
              >
                <Icon className="mr-3" fontSize="small" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 py-6">
        <button
          onClick={() => {
            /* TODO: logout logic */
          }}
          className="flex items-center justify-center px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-red-200 hover:text-red-700"
        >
          <LogoutIcon className="mr-2" fontSize="small" />
          Log out
        </button>
      </div>
    </aside>
  );
}
