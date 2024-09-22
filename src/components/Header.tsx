"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"; // MUI Fitness Icon
import { useAppContext } from "@/context/context";

const publicNavLinks = [
  {
    href: "/signup",
    label: "Signup",
  },
  {
    href: "/login",
    label: "Login",
  },
  {
    href: "/logout",
    label: "Logout",
  },
];

const privateNavLinks = [
  {
    href: "/profile",
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
    href: "/logout",
    label: "Logout",
  },
];

export default function Header() {
  const pathname = usePathname();
  const { token } = useAppContext(); // Access the token from context

  // Determine which links to display based on the token
  const navLinks = token ? privateNavLinks : publicNavLinks;

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <h2 className="w-[35px] h-[35px] flex items-center justify-center">
        <Link href="/">
          {/* Use FitnessCenterIcon from MUI */}
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
