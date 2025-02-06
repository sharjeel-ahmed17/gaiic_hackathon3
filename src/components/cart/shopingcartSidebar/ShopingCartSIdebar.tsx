import { useRouter } from "next/navigation";
import { CartItem } from "@/interfaces/cart";
import { urlFor } from "@/sanity/lib/image";

interface ShoppingCartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
}

const ShopingCartSideBar: React.FC<ShoppingCartSidebarProps> = ({ isOpen, onClose, cartItems }) => {
  const router = useRouter();
    if (!isOpen) return null;
const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 z-50">
      <button onClick={onClose} className="text-gray-400 hover:text-red-500">Close ✖</button>
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item._id} className="flex items-center justify-between border-b py-2">
            <div className="flex items-center space-x-3">
              <img src={urlFor(item.thumbnail).url()} alt={item.name} className="w-14 h-14 rounded-md object-cover" />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  {item.quantity} x <span className="text-gold-500 font-semibold">Rs. {item.price.toLocaleString()}</span>
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500">⨉</button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-4">Your cart is empty</p>
      )}

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm font-medium">Subtotal</p>
        <p className="text-lg font-bold text-gold-500">Rs. {subtotal.toLocaleString()}</p>
      </div>

      <div className="flex justify-between mt-4">
        <button 
          onClick={() => {
            onClose(); // Close sidebar
            router.push("/cart"); // Navigate to cart
          }} 
          className="border px-4 py-2 rounded-lg text-sm"
        >
          View Cart
        </button>
        <button className="border px-4 py-2 rounded-lg text-sm bg-black text-white">Checkout</button>
        <button className="border px-4 py-2 rounded-lg text-sm">Comparison</button>
      </div>
    </div>
  );
};

export default ShopingCartSideBar;
