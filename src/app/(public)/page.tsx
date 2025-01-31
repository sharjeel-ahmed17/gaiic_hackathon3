// import { Button } from "@/components/ui/button";
// import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Category from "@/components/home/category/Category";
import Cta from "@/components/home/cta/Cta";
import FeaturedProducts from "@/components/home/featuredProducts/FeaturedProducts";
import Hero from "@/components/home/hero/Hero";
import ImageGallery from "@/components/home/imageGallery/ImageGallery";


import { currentUser } from "@clerk/nextjs/server";



export default  async function Home() {

  const user =await currentUser()
  console.log(user?.id);
  
  return (
    <div>
      {/* <h1 className="text-4xl text-green-950">{user ? 'Dashboard' : 'Login'}</h1> */}
      <Hero />
      <Category />
      <FeaturedProducts />
     <Cta/>
     <ImageGallery />
    </div>
  );
}
