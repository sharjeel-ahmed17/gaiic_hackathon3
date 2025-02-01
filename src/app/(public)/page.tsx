// 'use client'
// import { Button } from "@/components/ui/button";
// import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Category from "@/components/home/category/Category";
import Cta from "@/components/home/cta/Cta";
import FeaturedProducts from "@/components/home/featuredProducts/FeaturedProducts";
import Hero from "@/components/home/hero/Hero";
import ImageGallery from "@/components/home/imageGallery/ImageGallery";


import { currentUser } from "@clerk/nextjs/server";

// import { useRouter } from "next/navigation";



export default async function Home() {
  // const pathname = usePathname;
  // pathname

  // const router = useRouter();

  // console.log(router.pathname);


  const user = await currentUser()
  // console.log(user?.id);

  return (
    <div>

      <Hero />
      <Category />
      <FeaturedProducts />
      <Cta />
      <ImageGallery />
    </div>
  );
}
