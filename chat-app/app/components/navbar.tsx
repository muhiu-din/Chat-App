"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, User, Settings, HomeIcon } from "lucide-react";
import { useUser, SignedIn, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useUser();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-purple-600">
            <MessageCircle className="w-6 h-6" />
            ChatSphere
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
             <Link
              href="/"
              className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
            <Link
              href="/chats"
              className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              Chats
            </Link>


           
            <Link
              href="/forums"
              className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <User className="w-5 h-5" />
              Forums
            </Link>
             <SignedIn>
        <UserButton />
      </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-3 space-y-3">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium transition"
              >
                <HomeIcon className="w-5 h-5" />
               Home
              </Link>
              <Link
                href="/chats"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium transition"
              >
                <MessageCircle className="w-5 h-5" />
                Chats
              </Link>


              
              <Link
                href="/forums"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium transition"
              >
                <User className="w-5 h-5" />
                Forums
              </Link>
              <div className="flex flex-row  gap-2   text-gray-700  hover:text-indigo-600 font-medium transition">
                <div>
                   <SignedIn>
        <UserButton />
      </SignedIn>
                </div>
                <div>
                  {user?.firstName}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
