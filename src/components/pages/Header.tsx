import { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="bg-teal-600 dark:bg-teal-800 text-white px-6 py-2 flex items-center justify-between shadow-sm transition-colors">
      <div className="flex items-center space-x-2">
        <ReceiptLongIcon className="text-white" fontSize="medium" />
        <span className="text-xl font-bold tracking-tight">CrediKhaata</span>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDark(!dark)}
          className="
        flex items-center justify-center
        h-8 w-8
        rounded-full
        bg-teal-500 dark:bg-gray-500
        transition-colors
      "
          aria-label="Toggle theme"
        >
          {dark ? (
            <LightModeIcon className="text-white" fontSize="small" />
          ) : (
            <DarkModeIcon className="text-white" fontSize="small" />
          )}
        </button>

        <AccountCircleIcon
          fontSize="large"
          className="text-white dark:text-gray-300 cursor-pointer hover:text-teal-100 dark:hover:text-gray-100 transition-colors"
        />
      </div>
    </header>
  );
}
