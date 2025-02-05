import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"; // Import NextRequest type

// Define the expected params type
interface Params {
  params: {
    id: string;
  };
}

// Sanity query to fetch a product by ID
export async function GET(req: NextRequest, { params }: Params) {
  try {
    // Ensure params are awaited
    const { id } =  params;

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
    const err = error as Error; // Ensure error is typed properly
    return NextResponse.json(
      {
        error: true,
        message: err.message,
        data: null,
      },
      { status: 500 }
    );
  }
}
