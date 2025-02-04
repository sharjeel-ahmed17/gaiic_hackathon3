export default function Breadcrumb() {
    return (
      <nav className="bg-cream p-4">
        <div className="flex items-center text-gray-500 text-sm">
          <a href="#" className="hover:text-black">Home</a>
          <span className="mx-2">›</span>
          <a href="#" className="hover:text-black">Shop</a>
          <span className="mx-2">›</span>
          <span className="text-black font-semibold">Asgaard sofa</span>
        </div>
      </nav>
    );
  }
  