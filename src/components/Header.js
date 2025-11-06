"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSearch, FaBars } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";

const Header = () => {
  const { setTheme } = useTheme();

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border border-b-blue-700 bg-background">
        <div className="mx-auto flex h-16 items-center justify-between px-8">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image
              src={"/transparnt-logo.png"}
              alt="logo"
              width={60}
              height={60}
            />
            <p className="font-semibold"></p>
            <h1 className="text-lg font-semibold leading-tight hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900">
              Cyber Circus
            </h1>
          </Link>
          <nav className="hidden items-center justify-between gap-8 text-sm font-medium md:flex">
            <div className="flex justify-center gap-2 rounded-xl p-4">
              <Link className="p-2 px-4 group" href="/">
                Home
                <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-blue-500"></div>
              </Link>
              <Link className="p-2 px-4 group" href="/about">
                About
                <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-blue-500"></div>
              </Link>
              <Link className="p-2 px-4 group" href="/portfolio">
                Portfolio
                <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-blue-500"></div>
              </Link>
              <Link className="p-2 px-4 group" href="/contact">
                Contact
                <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-blue-500"></div>
              </Link>
              <Link className="p-2 px-4 group" href="/career">
                Career
                <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-blue-500"></div>
              </Link>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="button"
              className="text-foreground bg-blue-700 hover:bg-blue-900 p-3 text-white"
            >
              <GrLanguage />
              <span>English</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <FaSearch className="h-4 w-4 text-foreground" />
                  <span className="sr-only">Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[300px] p-4 mr-24">
                <div className="relative">
                  <FaSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-8 w-full"
                  />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <BsSunFill className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <BsMoonFill className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="cursor-pointer"
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="cursor-pointer"
                >
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="cursor-pointer"
                >
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full md:hidden"
                >
                  <FaBars className="h-4 w-4 text-foreground" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="grid gap-4 p-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-base font-medium text-foreground hover:text-foreground transition-colors"
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
