import Category from "@/components/home/category/Category";
import Cta from "@/components/home/cta/Cta";
import FeaturedProducts from "@/components/home/featuredProducts/FeaturedProducts";
import Hero from "@/components/home/hero/Hero";
import ImageGallery from "@/components/home/imageGallery/ImageGallery";
import { currentUser } from "@clerk/nextjs/server";



export default async function Home() {
const user = await currentUser()
  // console.log(user?.id);
  return (
    <>

      <Hero />
      <Category />
      <FeaturedProducts />
      <Cta />
      <ImageGallery />
    </>
  );
}
