/* import Link from "next/link";
import React from "react";

const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1Hx9fH6jph/?mibextid=wwXIfr",
  },
  {
    name: "Twitter",
    url: "https://x.com/thecatchmeapp?s=21",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/thecatchme_app/profilecard/?igsh=NmRzbmw4aTh6aXA=",
  },
];
const Footer = ({}) => {


  return (
    <div
      className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-evenly bg-[#333] 
    pl-10 sm:pl-0 py-5
    "
    >
      <div className="flex flex-col gap-2">
        <h4 className="font-raleway text-white">Community</h4>
        {socialMedia.map((item, index) => (
          <a
            target="_blank"
            href={item.url}
            key={index}
            // onClick={() => openLinks(item.url)}
            className="text-white font-dmSans cursor-pointer hover:underline"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="font-raleway text-white">Safety</h4>
        <Link
          target="_blank"
          href="/support"
          // onClick={moveToFAQS}
          className="text-white font-dmSans cursor-pointer hover:underline"
        >
          Support
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="font-raleway text-white ">Contact</h4>

        <a
          href="mailto:support@thecatchmeapp.co"
          // onClick={moveToCommunityGuidelines}
          className="text-white font-dmSans cursor-pointer hover:underline"
        >
          CatchMe Info
        </a>
        <a
          href="mailto:support@thecatchmeapp.co"
          // onClick={moveToCommunityGuidelines}
          className="text-white font-dmSans cursor-pointer hover:underline"
        >
          CatchMe support
        </a>
      </div>
    </div>
  );
};

export default Footer; */

import { Heart, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ff0a54] rounded-xl">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold text-[#ff0a54]">
                CatchMeApp
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting students across UK universities through meaningful
              relationships and friendships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ff0a54]">
              Quick Links
            </h4>
            <div className="space-y-2">
              {/*   <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Features
              </Link> */}
              <Link
                href="/privacy"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ff0a54]">
              Support
            </h4>
            <div className="space-y-2">
              {/*    <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Help Center
              </Link> */}
              <Link
                href="/support"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              {/*    <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Safety Tips
              </Link> */}
              <Link
                href="/community-guidelines"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Community Guidelines
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ff0a54]">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#ff0a54]" />
                <span className="text-gray-400">support@catchmeapp.co</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#ff0a54]" />
                <span className="text-gray-400">info@catchmeapp.co</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#ff0a54]" />
                <span className="text-gray-400">London, UK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CatchMeApp. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-[#ff0a54] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-[#ff0a54] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
