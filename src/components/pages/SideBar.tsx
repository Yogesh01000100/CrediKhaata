import { NavLink, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast } from "sonner";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    toast.info("Logged out!");
    navigate("/login");
  };

  const menuItems = [
    { to: "/dashboard", label: "Dashboard", icon: DashboardIcon },
    { to: "/customers", label: "Customers", icon: PeopleIcon },
    { to: "/add-customer", label: "Add Customer", icon: AddCircleIcon },
  ];

  return (
    <aside className="flex flex-col w-50 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-colors">
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
                       ? "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                       : "text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700 hover:text-teal-700 dark:hover:text-white"
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
          onClick={handleLogout}
          className="flex items-center justify-center px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-400 hover:text-red-600 dark:hover:text-white transition-colors"
        >
          <LogoutIcon className="mr-2" fontSize="small" />
          Log out
        </button>
      </div>
    </aside>
  );
}
