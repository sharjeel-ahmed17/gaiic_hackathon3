'use client'
import { useState } from "react";

export default function ProductDescriptionTabBr() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      {/* Tabs Section */}
      <div className="flex pb-2 mb-4 space-x-6 text-gray-500 text-lg justify-center">
        {[
          { id: "description", label: "Description" },
          { id: "additional", label: "Additional Information" },
          { id: "reviews", label: "Reviews [5]" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "text-black font-semibold " : ""
            } pb-2`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      {activeTab === "description" && (
        <div className="text-gray-600 text-lg space-y-4">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
            speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes
            the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled
            engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is
            a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange
            and extended highs for a sound that is both articulate and pronounced. The analogue
            knobs allow you to fine-tune the controls to your personal preferences while the
            guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>
      )}

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-cream p-6 rounded-lg">
          <img src="/images/cat1.png" alt="Sofa 1" className="w-full rounded-lg" />
        </div>
        <div className="bg-cream p-6 rounded-lg">
          <img src="/images/cat2.png" alt="Sofa 2" className="w-full rounded-lg" />
        </div>
      </div>
    </>
  );
}
