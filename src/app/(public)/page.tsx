import Category from "@/components/home/Category";
import Inspirations from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import ImageGallery from "@/components/home/ImageGallery";
import OurProducts from "@/components/home/OurProducts";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Homepage | Furniro",
  description: "Furniro a Furniture Ecommerce Webite",
};

export default async function Home() {
  const user = await currentUser()
  // console.log(user?.fullName);
  console.log(user?.id);

  return (

    <div>
      <Hero />
      <Category />
      <OurProducts />
      <Inspirations />
      <ImageGallery />
    </div>
  );
}