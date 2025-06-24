"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Heart,
  HelpCircleIcon,
  Book,
  /*   Users,
  MessageCircle,
  User,
  Sparkles, */
} from "lucide-react";
import { handleExternalLink } from "@/utils/handleExternalLink";

import CatchMe from "@/assets/CatchMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faPlay } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Heart },
    { name: "Support", href: "/support", icon: HelpCircleIcon },
    { name: "FAQs", href: "/faqs", icon: Book },
    /* { name: "Messages", href: "/messages", icon: MessageCircle },
    { name: "Profile", href: "/profile", icon: User }, */
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#ff0a54] to-[#ff3366]">
              <CatchMe />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#ff0a54] to-black bg-clip-text text-transparent">
              TheCatchMeApp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#ff0a54] transition-colors duration-200 font-medium"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() =>
                handleExternalLink(
                  "https://play.google.com/store/apps/details?id=com.boogie2k.catchmeappfrontend"
                )
              }
              variant="outline"
              className="border-[#ff0a54] text-[#ff0a54] hover:bg-[#ff0a54] hover:text-white py-6"
            >
              <FontAwesomeIcon
                style={{ width: 24, height: 24 }}
                icon={faPlay}
              />{" "}
              <div>
                <p className="font-dmSans">available on</p>
                <p>Google Play</p>
              </div>
            </Button>
            <Button
              onClick={() =>
                handleExternalLink(
                  "https://apps.apple.com/gb/app/thecatchmeapp/id6738162941"
                )
              }
              className="bg-[#ff0a54] hover:bg-[#e60948] text-white  py-6"
            >
              <FontAwesomeIcon
                style={{ width: 24, height: 24 }}
                icon={faAppleAlt}
              />{" "}
              <div>
                <p className="font-dmSans">available on</p>
                <p>App store</p>
              </div>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b border-gray-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#ff0a54] to-[#ff3366]">
                    <CatchMe />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-[#ff0a54] to-black bg-clip-text text-transparent">
                    TheCatchMeApp
                  </span>
                </div>

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#ff0a54] transition-colors duration-200 font-medium py-2"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}

                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <Button
                    onClick={() =>
                      handleExternalLink(
                        "https://play.google.com/store/apps/details?id=com.boogie2k.catchmeappfrontend"
                      )
                    }
                    variant="outline"
                    className="border-[#ff0a54] text-[#ff0a54] hover:bg-[#ff0a54] hover:text-white py-6"
                  >
                    <FontAwesomeIcon
                      style={{ width: 24, height: 24 }}
                      icon={faPlay}
                    />{" "}
                    <div>
                      <p className="font-dmSans">available on</p>
                      <p>Google Play</p>
                    </div>
                  </Button>
                  <Button
                    onClick={() =>
                      handleExternalLink(
                        "https://apps.apple.com/gb/app/thecatchmeapp/id6738162941"
                      )
                    }
                    className="bg-[#ff0a54] hover:bg-[#e60948] text-white  py-6"
                  >
                    <FontAwesomeIcon
                      style={{ width: 24, height: 24 }}
                      icon={faAppleAlt}
                    />{" "}
                    <div>
                      <p className="font-dmSans">available on</p>
                      <p>App store</p>
                    </div>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
