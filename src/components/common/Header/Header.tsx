// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Menu, ShoppingCart, Heart, User } from "lucide-react";
// import SearchCompo from "@/components/common/Header/Search";
// import { navLink } from "@/lib/link";
// import Link from "next/link";
// import { UserButton } from "@clerk/nextjs";
// import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
// import clsx from 'clsx';
// import { usePathname } from "next/navigation";
// import { useCart } from "@/contexts/cartContext";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   console.log(pathname);
  
//   const { cart } = useCart();
//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   console.log(totalItems);
  

//   return (
//     <header className="w-full bg-white shadow-md overflow-x-hidden">
//       {/* Main Navbar */}
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo (Bigger & Always Visible) */}
//         <div className="flex items-center">
//           <Image
//             src="/images/logo.png"
//             alt="Logo"
//             width={180} // Bigger logo size
//             height={80}
//             className="object-contain max-w-[200px] md:max-w-[180px]" // Responsive
//           />
          
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center space-x-8">
//           {
//             navLink.map((nav, index) => (
//               //  <Link key={index} href={nav.path} className="text-gray-800 hover:text-gray-500">{nav.name}</Link>
//               <Link
//                 key={index}
//                 href={nav.path}
//                 className={clsx(
//                   'text-red-600',
//                   {
//                     'bg-red-500 text-red-950': pathname === nav.path,
//                   },
//                 )}
//               >{nav.name}</Link>
//             ))
//           }
//         </nav>

//         {/* Icons (Desktop) */}
//         <div className="hidden lg:flex items-center space-x-6">
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <User className="w-6 h-6 cursor-pointer" />
//           <Heart className="w-6 h-6 cursor-pointer" />


//           <Link href='/cart'>< ShoppingCart className="w-6 h-6 cursor-pointer" />
          
//           </Link>
//         </div>

//         {/* Hamburger Button (Mobile) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden p-2"
//         >
//           <Menu className="w-7 h-7" />
//         </button>
//       </div>

//       {/* Search Bar (Moves Down on lg Screens) */}
//       <div className="flex w-full justify-center px-6 mt-4">
//         <SearchCompo />
//       </div>

//       {/* Mobile Menu (Hidden by default) */}
//       {isOpen && (
//         <nav className="lg:hidden bg-gray-100 py-4 px-6 space-y-4 text-center">
//           <Link href="#" className="block text-gray-800 hover:text-gray-500">Home</Link>
//           <Link href="#" className="block text-gray-800 hover:text-gray-500">Shop</Link>
//           <Link href="#" className="block text-gray-800 hover:text-gray-500">Blog</Link>
//           <Link href="#" className="block text-gray-800 hover:text-gray-500">Contact</Link>

//           {/* Mobile Icons */}
//           <div className="flex space-x-6 mt-4 justify-center">
//             <User className="w-6 h-6 cursor-pointer" />
//             <Heart className="w-6 h-6 cursor-pointer" />
//             <Link href='/cart'>< ShoppingCart className="w-6 h-6 cursor-pointer" /></Link>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Navbar;



"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, ShoppingCart, Heart, User } from "lucide-react";
import SearchCompo from "@/components/common/Header/Search";
import { navLink } from "@/lib/link";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useCart } from "@/contexts/cartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white shadow-md overflow-x-hidden">
      {/* Main Navbar */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={180}
              height={80}
              className="object-contain max-w-[200px] md:max-w-[180px] cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLink.map((nav, index) => (
            <Link
              key={index}
              href={nav.path}
              className={clsx("text-gray-800 hover:text-gray-500", {
                "bg-red-500 text-white px-3 py-2 rounded-md": pathname === nav.path,
              })}
            >
              {nav.name}
            </Link>
          ))}
        </nav>

        {/* Icons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <Heart className="w-6 h-6 cursor-pointer" />

          {/* Cart Icon with Badge */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex w-full justify-center px-6 mt-4">
        <SearchCompo />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-gray-100 py-4 px-6 space-y-4 text-center">
          {navLink.map((nav, index) => (
            <Link key={index} href={nav.path} className="block text-gray-800 hover:text-gray-500">
              {nav.name}
            </Link>
          ))}

          {/* Mobile Icons */}
          <div className="flex space-x-6 mt-4 justify-center">
            <Heart className="w-6 h-6 cursor-pointer" />
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 cursor-pointer" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
