import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  const [dark, setDark] = useState(false);

  return (
    <header className="bg-teal-600  text-white px-6 py-2 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-2">
        <ReceiptLongIcon className="text-white" fontSize="medium" />
        <span className="text-xl font-bold tracking-tight">CrediKhaata</span>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDark(!dark)}
          className="px-2 py-1 rounded-full hover:bg-teal-500 transition"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <LightModeIcon fontSize="small" className="text-white" />
          ) : (
            <DarkModeIcon fontSize="small" className="text-white" />
          )}
        </button>

        <button
          onClick={() => {
            /* TODO: logout logic */
          }}
          className="px-2 py-1 rounded-full hover:bg-teal-500 transition"
          aria-label="Log out"
        >
          <LogoutIcon fontSize="small" className="text-white" />
        </button>
      </div>
    </header>
  );
}
