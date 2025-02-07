import Category from "@/components/home/Category";
import Inspirations from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import ImageGallery from "@/components/home/ImageGallery";
import OurProducts from "@/components/home/OurProducts";
import { Metadata } from "next";
// import { currentUser } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title: "Homepage | Furniro",
  description: "Furniro a Furniture Ecommerce Webite",
};

export default async function Home() {
  // const user = await currentUser()
  // // console.log(user?.fullName);
  // console.log(user?.id);

  return (
    // <div className="flex justify-center items-center">
    //   <h1 className="text-4xl text-green-950">{user ? 'Dashboard' : 'Login'}</h1>
    // </div>
    <div>
      <Hero />
      <Category />
      <OurProducts />
      <Inspirations />
      <ImageGallery />
    </div>
  );
}