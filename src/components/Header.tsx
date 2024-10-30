"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useContext } from "react";

import { AppContext } from "@/context/context";

const publicNavLinks = [
  {
    href: "/client/signup",
    label: "Signup",
  },
  {
    href: "/client/login",
    label: "Login",
  },
  {
    href: "/client/logout",
    label: "Logout",
  },
];

const privateNavLinks = [
  {
    href: "/client/profile",
    label: "Profile",
  },
  {
    href: "/workouts",
    label: "Workouts",
  },
  {
    href: "/planner",
    label: "Planner",
  },
  {
    href: "/client/logout",
    label: "Logout",
  },
];

export default function Header() {
  const pathname = usePathname();
  const context = useContext(AppContext);

  const navLinks = context?.state.user.token ? privateNavLinks : publicNavLinks;

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <h2 className="w-[35px] h-[35px] flex items-center justify-center">
        <Link href="/">
          <FitnessCenterIcon className="text-2xl text-gray-900" />
        </Link>
      </h2>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
