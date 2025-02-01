import ProductListing from '@/components/Product/ProductListing';
import { Product } from '@/interfaces/Product';
import React from 'react'
import ProductToolbar from './Filter';
import Services from '@/components/reuseable/Services';
import { Breadcrumb } from '@/components/reuseable/Hero2';


const Shop = async () => {
    if (!process.env.NEXT_PUBLIC_base_url) {
        throw new Error("Base Url is not given!.");
    }



    const response = await fetch(`${process.env.NEXT_PUBLIC_base_url}/api/product`)
    if (!response.ok) {
        throw new Error("Some thing wen wrong");
    }
    // create the responsse interface 
    const { data }: { data: Product[] } = await response.json()

    // console.log(data);


    return (

        <div>
            {/* helllo */}
            {/* shrjeel  */}
            <Breadcrumb
                title="Shop"
                backgroundImage="/images/hero2.jpg"
                links={[
                    { name: "Home", href: "/" },
                    { name: "Shop", href: "/shop" },
                ]}
            />
            <ProductToolbar />
            {
                data.length > 0 ?
                    <ProductListing products={data} />
                    : <h1>Product Not Found</h1>
            }
            <Services />



        </div>
    )
}

export default Shop



