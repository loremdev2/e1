'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>


    </Button>
  );
};

const navItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/contact", children: "Contact" },
  { href: "/blog", children: "Blog" },
];

export const Navbar = () => {
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="h-20 flex items-center justify-between border-b bg-white font-medium">
      <Link href="/" className="text-5xl font-semibold">
        <span className={poppins.className}>Lorem Dev</span>
      </Link>

      <NavbarSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} items={navItems} />

      <div className="hidden lg:flex space-x-4">
        {navItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={item.href === pathname}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white
          hover:bg-blue-400 transition-colors text-lg"
        >
          <Link href="/sign-in">
            Log In
          </Link>
        </Button>
        <Button
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black
          text-white hover:bg-blue-400 transition-colors text-lg"
        >
          <Link href="/sign-up">
            Start selling
          </Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button variant="ghost" className="size-12 border-transparent bg-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
