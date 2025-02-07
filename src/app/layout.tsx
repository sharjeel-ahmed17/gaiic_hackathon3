import { CartContextProvider } from '@/contexts/cartContext';
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
                    <CartContextProvider>
                        <WishListProvider>
                            {children}
                        </WishListProvider>
                    </CartContextProvider>

                </ClerkProvider>
            </body>
        </html>
    )
}

export default RootLayout
