import ProductListing from "@/components/Product/ProductListing";
import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces/Product";
export default  async function FeaturedProducts() {

   if (!process.env.base_url) {
      throw new Error("Base Url is not given!.");
  }
  
 const response = await fetch(`${process.env.base_url}/api/product`)
    if (!response.ok) {
      throw new Error("Some thing wen wrong");
      }
    // create the responsse interface 
    const {error,message,data}:{error:boolean,message:string,data:Product[]} = await response.json();


  
  return (
    <>
{
        data.length > 0 ?
          <ProductListing products={data.slice(0, 4)}/>  
          : <h1>Product Not Found</h1>
      }  
      <div className="flex justify-center my-5">
        
   
   <Button variant="btnPrimary">show more</Button>
         </div>
    </>
  );
}
