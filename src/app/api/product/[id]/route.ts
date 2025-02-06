import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Sanity query to fetch a product by ID
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Access params directly
    const id = (await params).id 
    console.log(id);

    if (!id) {
      return NextResponse.json(
        {
          error: true,
          message: "Product ID is required",
          data: null,
        },
        { status: 400 }
      );
    }

    console.log("Fetching product with ID:", id);

    // Sanity query to fetch product by _id
    const query = `*[_type == "products" && _id == "${id}"][0]`;
    const product = await client.fetch(query);

    if (!product) {
      return NextResponse.json(
        {
          error: true,
          message: "Product not found",
          data: null,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        error: false,
        message: "Product fetched successfully",
        data: product,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: true,
        message: (error as Error).message,
        data: null,
      },
      { status: 500 }
    );
  }
}