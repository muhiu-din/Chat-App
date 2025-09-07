"use client";
// import { Metadata } from "next";


import { motion } from "framer-motion";
import { MessageCircle, Shield, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-purple-900 via-purple-900 to-black text-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Connect. Chat. Collaborate.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-purple-100">
            ChatSphere is the next-gen chatting app built for speed, security, and teams that never stop.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link
              href="/learn-more"
              className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
          Why Choose ChatSphere?
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-2xl shadow-lg text-center"
          >
            <MessageCircle className="w-10 h-10 mx-auto text-purple-600" />
            <h3 className="mt-4 text-xl text-gray-700 font-semibold">Real-time Messaging</h3>
            <p className="mt-2 text-gray-600">
              Lightning-fast conversations that keep you connected with your team and friends.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-2xl  shadow-lg text-center"
          >
            <Shield className="w-10 h-10 mx-auto text-purple-600" />
            <h3 className="mt-4 text-xl text-gray-700 font-semibold">Secure & Private</h3>
            <p className="mt-2 text-gray-600">
              End-to-end encryption ensures your messages are yours and only yours.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-2xl shadow-lg text-center"
          >
            <Users className="w-10 h-10 mx-auto text-purple-600" />
            <h3 className="mt-4 text-xl  text-gray-700 font-semibold">Team Collaboration</h3>
            <p className="mt-2 text-gray-600">
              Built for both individuals and teams — share files, create groups, and stay organized.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Pricing that scales with you
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="p-8 bg-gray-100 rounded-2xl shadow-lg text-center  hover:shadow-xl transition">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="mt-2 text-gray-600">Perfect for individuals</p>
            <p className="mt-6 text-4xl font-extrabold">$0</p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ Unlimited chats</li>
              <li>✔ 1 device login</li>
              <li>✔ Basic support</li>
            </ul>
            <Link
              href="/signup"
              className="mt-8 inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition"
            >
              Start Free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="p-8 bg-purple-600 text-white rounded-2xl shadow-lg text-center transform scale-105">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="mt-2">For power users</p>
            <p className="mt-6 text-4xl font-extrabold">$9/mo</p>
            <ul className="mt-6 space-y-2">
              <li>✔ Unlimited devices</li>
              <li>✔ File sharing</li>
              <li>✔ Priority support</li>
            </ul>
            <Link
              href="/signup"
              className="mt-8 inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Go Pro
            </Link>
          </div>

          {/* Team Plan */}
          <div className="p-8 bg-gray-100 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
            <h3 className="text-2xl font-bold">Team</h3>
            <p className="mt-2 text-gray-600">Best for organizations</p>
            <p className="mt-6 text-4xl font-extrabold">$29/mo</p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ Everything in Pro</li>
              <li>✔ Team workspaces</li>
              <li>✔ Admin controls</li>
            </ul>
            <Link
              href="/signup"
              className="mt-8 inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition"
            >
              Get Team Plan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "Home-ChatSphere",
//   description: "ChatSphere help you connect with your friends and family",
// };