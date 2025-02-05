// import ProductListing from '@/components/Product/ProductListing';
// import { Product } from '@/interfaces/Product';
// import React from 'react'
// import ProductToolbar from './Filter';
// import Services from '@/components/reuseable/Services';
// import { Breadcrumb } from '@/components/reuseable/Hero2';

// import {
//     Pagination,
//     PaginationContent,

//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"

// const Shop = async () => {
//     if (!process.env.NEXT_PUBLIC_base_url) {
//         throw new Error("Base Url is not given!.");
//     }



//     const response = await fetch(`${process.env.NEXT_PUBLIC_base_url}/api/product`)
//     if (!response.ok) {
//         throw new Error("Some thing wen wrong");
//     }
//     // create the responsse interface 
//     const { data }: { data: Product[] } = await response.json()

//     // console.log(data);


    


//     return (

//         <div>
//             {/* helllo */}
//             {/* shrjeel  */}
//             <Breadcrumb
//                 title="Shop"
//                 backgroundImage="/images/hero2.jpg"
//                 links={[
//                     { name: "Home", href: "/" },
//                     { name: "Shop", href: "/shop" },
//                 ]}
//             />
//             <ProductToolbar />
//             {
//                 data.length > 0 ?
//                     <ProductListing products={data} />
//                     : <h1>Product Not Found</h1>
//             }



//             <Pagination>
//                 <PaginationContent>
//                     <PaginationItem>
//                         <PaginationPrevious href="#" />
//                     </PaginationItem>
//                     <PaginationItem>
//                         <PaginationLink href="#">1</PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem>
//                         <PaginationLink href="#">2</PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem>
//                         <PaginationLink href="#">3</PaginationLink>
//                     </PaginationItem>

//                     <PaginationItem>
//                         <PaginationNext href="#" />
//                     </PaginationItem>
//                 </PaginationContent>
//             </Pagination>

//             <Services />



//         </div>
//     )
// }

// export default Shop



import ProductListing from '@/components/Product/ProductListing';
import { Hero2 } from '@/components/reuseable/Hero2';
import { Product } from '@/interfaces/Product';
import React from 'react'
import ProductToolbar from './Filter';
import Pagination from '@/components/reuseable/Pagination';
import Services from '@/components/reuseable/Services';

const Shop = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {

  if (!process.env.NEXT_PUBLIC_base_url) {
    throw new Error("Base Url is not given!.");

  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_base_url}/api/product`)
  if (!response.ok) {
    throw new Error("Some thing went wrong");
  }
  // create the responsse interface 
  const { error, message, data }: { error: boolean, message: string, data: Product[] } = await response.json()

  if (error) {
    throw new Error(message);
  }

  //get search param  
  const searchParam = await searchParams
  //set initial value if not define in url
  const page = searchParam.page || '1'
  const perPage = searchParam.perPage || '8'
  const sortBy = searchParam.sortBy || 'default'


  //get total pages initially we show 8 prod per page
  const totalPages = Math.ceil(data.length / Number(perPage)) //math ceil is liye kra taky hm greater ki trf jayn 

  // now set offset mean (jtni value ayn unko chor kr)
  const offsetStart = (Number(page) - 1) * Number(perPage) //mtlb ya ky agr initial hain to  (1-1) * 8 = 0 mtlb shru sy lao 
  //second page  (2-1) * 8 = 8 mtlb shru ky 8 skip kr ky lao
  const offsetEnd = offsetStart + Number(perPage)

  const sortedData = [...data].sort((a, b) =>
    sortBy === "price-asc" ? a.discountPrice - b.discountPrice :  // Low to High
      sortBy === "price-desc" ? b.discountPrice - a.discountPrice :  // High to Low
        // sortBy === "popularity" ? b.popularity - a.popularity :  // Zyada popular pehle
        sortBy === "newest" ? Number(new Date(b._createdAt)) - Number(new Date(a._createdAt)) :  // Naya pehle
          0 // Default case (koi sorting na ho)
  );

  return (

    <div>
      <Hero2 title="Shop"/>
      <ProductToolbar totalLength={data.length} />
      {
        data.length > 0 ?
          <ProductListing products={sortedData.slice(offsetStart, offsetEnd)} />
          : <h1>No Product Found</h1>
      }

      <Pagination totalPages={totalPages} />

      <Services />
    </div>
  )
}

export default Shop