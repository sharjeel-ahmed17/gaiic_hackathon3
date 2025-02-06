import ProductListing from "@/components/Product/ProductListing";
import { Hero2 } from "@/components/reuseable/Hero2";
import { Product } from "@/interfaces/Product";
import React from "react";
import ProductToolbar from "./Filter";
import Pagination from "@/components/reuseable/Pagination";
import Services from "@/components/reuseable/Services";
const Shop = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  if (!process.env.NEXT_PUBLIC_base_url) {
    throw new Error("Base Url is not given!.");
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_base_url}/api/product`
  );
  if (!response.ok) {
    throw new Error("Some thing went wrong");
  }
  const {
    error,
    message,
    data,
  }: { error: boolean; message: string; data: Product[] } =
    await response.json();

  if (error) {
    throw new Error(message);
  }

  const searchParam = await searchParams;

  const page = searchParam.page || "1";
  const perPage = searchParam.perPage || "8";
  const sortBy = searchParam.sortBy || "default";

  const totalPages = Math.ceil(data.length / Number(perPage));
  const offsetStart = (Number(page) - 1) * Number(perPage);
  const offsetEnd = offsetStart + Number(perPage);
  const sortedData = [...data].sort((a, b) =>
    sortBy === "price-asc"
      ? a.discountPrice - b.discountPrice
      : sortBy === "price-desc"
        ? b.discountPrice - a.discountPrice
        : sortBy === "newest"
          ? Number(new Date(b._createdAt)) - Number(new Date(a._createdAt))
          : 0
  );

  return (
    <div>
      <Hero2 title="Shop" />
      <ProductToolbar totalLength={data.length} />
      {data.length > 0 ? (
        <ProductListing products={sortedData.slice(offsetStart, offsetEnd)} />
      ) : (
        <h1>No Product Found</h1>
      )}

      <Pagination totalPages={totalPages} />

      <Services />
    </div>
  );
};

export default Shop;
