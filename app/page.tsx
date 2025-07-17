"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { User } from "@clerk/nextjs/server";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

export default function HeroSectionOne() {

  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleClick = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-green-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 py-10 md:py-20">
        <div>
          <h1 className="relative z-10 mt-16 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
            {"🩺 Revolutionize Paitent Care with AI Voice agents"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            Provide 24/7 intelligent medical support using conversational AI. Triage symptoms, book appointments, and deliver empathetic care with voice-first automation.
          </motion.p>
        </div>
        <div>
          <Button onClick={handleClick} className="hover:cursor-pointer">
            Get Started
          </Button>
        </div>
        <div className=" mt-12">
          <img src="./hero.jpg" className="p-5 border border-green-200 rounded-2xl" alt="" />
        </div>
      </div>
      <div id="pricing">
        <PricingCards />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}

// const Navbar = () => {
//   const { user } = useUser();

//   return (
//     <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-green-100 border border-lime-500 rounded-xl px-4 py-4 dark:border-neutral-800">
//       <div className="flex items-center gap-2">
//         <img
//           src="./logo_1.png"
//           alt="Logo"
//           className="h-auto w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px] rounded-2xl border"
//         />
//       </div>
//       <div className="flex gap-10 text-green-900 font-semibold text-lg">
//         <div className=" hover:pointer-fine:">
//           <p className="transition  duration-300 hover:text-green-700 cursor-pointer    hover:scale-105">Home</p>
//         </div>
//         <div>
//           <p onClick={() => {
//             const section = document.getElementById("pricing");
//             section?.scrollIntoView({ behavior: "smooth" });
//           }} className="transition duration-300 hover:text-green-700 cursor-pointer  hover:scale-105">Pricing</p>
//         </div>
//         <div>
//           <p onClick={() => {
//             const section = document.getElementById("contact");
//             section?.scrollIntoView({ behavior: "smooth" });
//           }} className="transition  duration-300 hover:text-green-700 cursor-pointer hover:scale-105">Contact Us</p>
//         </div>
//       </div>
//       {
//         !user ? <Link href={'/sign-in'}><button className="w-24 md:w-32 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
//           Login
//         </button></Link> :
//           <div className="flex gap-5 items-center">
//             <UserButton />
//             <Link href={'/dashboard'}>
//               <Button className="hover:cursor-pointer">Dashboard</Button>
//             </Link>
//           </div>
//       }
//     </nav>
//   );
// };

const Navbar = () => {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (elementId?: string) => {
    if (elementId) {
      const section = document.getElementById(elementId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-green-100 border border-lime-500 rounded-xl px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <img
          src="./logo_1.png"
          alt="Logo"
          className="h-auto w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px] rounded-2xl border"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 text-green-900 font-semibold text-lg">
        <div>
          <p className="transition duration-300 hover:text-green-700 cursor-pointer hover:scale-105">
            Home
          </p>
        </div>
        <div>
          <p 
            onClick={() => handleNavClick("pricing")}
            className="transition duration-300 hover:text-green-700 cursor-pointer hover:scale-105"
          >
            Pricing
          </p>
        </div>
        <div>
          <p 
            onClick={() => handleNavClick("contact")}
            className="transition duration-300 hover:text-green-700 cursor-pointer hover:scale-105"
          >
            Contact Us
          </p>
        </div>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-green-900 hover:text-green-700 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex">
        {!user ? (
          <Link href={'/sign-in'}>
            <button className="w-24 md:w-32 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Login
            </button>
          </Link>
        ) : (
          <div className="flex gap-5 items-center">
            <UserButton />
            <Link href={'/dashboard'}>
              <Button className="hover:cursor-pointer">Dashboard</Button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-green-100 border border-lime-500 rounded-xl mt-2 mx-4 md:hidden shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div 
              onClick={() => handleNavClick()}
              className="text-green-900 font-semibold text-lg hover:text-green-700 cursor-pointer py-2 border-b border-green-200"
            >
              Home
            </div>
            <div 
              onClick={() => handleNavClick("pricing")}
              className="text-green-900 font-semibold text-lg hover:text-green-700 cursor-pointer py-2 border-b border-green-200"
            >
              Pricing
            </div>
            <div 
              onClick={() => handleNavClick("contact")}
              className="text-green-900 font-semibold text-lg hover:text-green-700 cursor-pointer py-2 border-b border-green-200"
            >
              Contact Us
            </div>
            
            {/* Mobile Auth Section */}
            <div className="pt-4">
              {!user ? (
                <Link href={'/sign-in'}>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  >
                    Login
                  </button>
                </Link>
              ) : (
                <div className="flex flex-col gap-3 items-center">
                  <UserButton />
                  <Link href={'/dashboard'}>
                    <Button 
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:cursor-pointer w-full"
                    >
                      Dashboard
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const PricingCards = () => {
  const { user } = useUser();
  const router = useRouter();


  const handleSubscribe = () => {
    if (!user) {
      // If user is not logged in, redirect to sign in
      router.push('/sign-in');
      return;
    }

    // Check if user has an active subscription
    // You can check user.publicMetadata or user.privateMetadata for subscription status
    // For example: const hasSubscription = user.publicMetadata?.subscription === 'pro';
    const hasSubscription = user.publicMetadata?.subscription === 'pro';

    if (!hasSubscription) {
      // If user doesn't have a paid subscription, redirect to billing
      router.push('/dashboard/billing');
    } else {
      // User already has subscription - you can show a message or handle accordingly
      console.log('User already has an active subscription');
    }
  };



  return (
    <div className="py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8">Join Subscription</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Free Plan */}
        <Card className="shadow-md border">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Free {
                !user ? <div></div> : <span className="text-xs bg-muted px-2 py-1 rounded">Active</span>
              }
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$0</p>
            <p className="text-muted-foreground text-sm mb-4">Always free</p>
            <ul className="space-y-2 text-sm">
              <li>✓ 1 Free Medical Consultation</li>
              <li>✓ Free Medical Report</li>
            </ul>
            <Link href={'/sign-in'}>
              <Button className="w-full bg-green-400 mt-20 hover:bg-green-800 cursor-pointer group">
                <span className="text-green-950 group-hover:text-white">Start for free</span>
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Pro Plan */}
        <Card className="shadow-md border border-2 border-green-500">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$6.99 <span className="text-base">/month</span></p>
            <p className="text-muted-foreground text-sm mb-4">Billed annually</p>
            <ul className="space-y-2 text-sm mb-6">
              <li>✓ 20 Medical Consultations / Month</li>
              <li>✓ Unlimited Medical Reports</li>
              <li>✓ Email Support</li>
              <li>✓ Priority Support</li>
            </ul>
            <Button onClick={handleSubscribe} className="w-full bg-green-400 hover:bg-green-800 cursor-pointer group">
              <span className="text-green-950 group-hover:text-white">Subscribe</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="bg-green-300 py-10 px-6 md:px-20 text-green-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="./logo_1.png"
            alt="Logo"
            className="h-auto w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px] rounded-2xl border"
          />
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-2xl">
          <a className="hover:text-white cursor-pointer transition-colors duration-200">
            <FaFacebookF />
          </a>
          <a className="hover:text-white cursor-pointer transition-colors duration-200">
            <FaTwitter />
          </a>
          <a className="hover:text-white cursor-pointer transition-colors duration-200">
            <FaInstagram />
          </a>
          <a className="hover:text-white cursor-pointer transition-colors duration-200">
            <FaLinkedin />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-center md:text-right">
          <p>📞 +91 70585 93626</p>
          <p>✉️ support@voicecure.ai</p>
        </div>
      </div>
    </div>
  );
};

