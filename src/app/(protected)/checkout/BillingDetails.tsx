export default function BillingDetails() {
    return (
      <div className="">
        <h2 className="text-2xl font-bold mb-6">Billing details</h2>
  
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium">Company Name (Optional)</label>
          <input type="text" className="w-full p-2 border rounded-lg" />
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium">Country / Region</label>
          <select className="w-full p-2 border rounded-lg bg-gray-100" disabled>
            <option>Sri Lanka</option>
          </select>
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium">Street Address</label>
          <input type="text" className="w-full p-2 border rounded-lg" />
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium">Town / City</label>
          <input type="text" className="w-full p-2 border rounded-lg" />
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium">Province</label>
          <select className="w-full p-2 border rounded-lg bg-gray-100" disabled>
            <option>Western Province</option>
          </select>
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium">ZIP Code</label>
          <input type="text" className="w-full p-2 border rounded-lg" />
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium">Phone</label>
          <input type="text" className="w-full p-2 border rounded-lg" />
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium">Email Address</label>
          <input type="email" className="w-full p-2 border rounded-lg" />
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium">Additional Information</label>
          <textarea className="w-full p-2 border rounded-lg bg-gray-100" placeholder="Additional information"></textarea>
        </div>
      </div>
    );
  }
  