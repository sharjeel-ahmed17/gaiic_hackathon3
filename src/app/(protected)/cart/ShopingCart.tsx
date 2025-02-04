export default function ShoppingCart() {
    const cartItems = [
      {
        id: 1,
        name: "Asgaard sofa",
        price: 250000,
        image: "/images/cat1", // Replace with actual image
        quantity: 1,
      },
      {
        id: 2,
        name: "Casaliving Wood",
        price: 270000,
        image: "/images/cat2", // Replace with actual image
        quantity: 1,
      },
    ];
  
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
  
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-2">
            <div className="flex items-center space-x-3">
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-md object-cover" />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">1 x <span className="text-gold-500 font-semibold">Rs. {item.price.toLocaleString()}</span></p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500">⨉</button>
          </div>
        ))}
  
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm font-medium">Subtotal</p>
          <p className="text-lg font-bold text-gold-500">Rs. {subtotal.toLocaleString()}</p>
        </div>
  
        <div className="flex justify-between mt-4">
          <button className="border px-4 py-2 rounded-lg text-sm">Cart</button>
          <button className="border px-4 py-2 rounded-lg text-sm bg-black text-white">Checkout</button>
          <button className="border px-4 py-2 rounded-lg text-sm">Comparison</button>
        </div>
      </div>
    );
  }
  