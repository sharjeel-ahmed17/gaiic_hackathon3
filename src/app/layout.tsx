import{CartProvider} from '@/contexts/cartContext';
import { WishListProvider } from '@/contexts/WhishListContext';
import { poppins } from '@/lib/fonts';
import { ClerkProvider } from '@clerk/nextjs';
import React from 'react'
import "./globals.css"
const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <ClerkProvider>
                    <CartProvider>
                        <WishListProvider>

                            <div className="max-w-[1440px] mx-auto">
                                {children}
                            </div>
                        </WishListProvider>

                    </CartProvider>

                </ClerkProvider>
            </body>
        </html>
    )
}

export default RootLayout