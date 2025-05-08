import { galleryItems } from "@/fakedata/galleryItems";
import GalleryItem from "./GalleryItem";
import { useState } from "react";

const GalleryContent = () => {
  // Extract unique types
  const types = ["All", ...new Set(galleryItems.map((item) => item.type))];

  // State to track active tab
  const [activeTab, setActiveTab] = useState("All");

  // Filter gallery items based on active tab
  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.type === activeTab);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-4 w-full overflow-auto lg:justify-center lg:items-center">
        {types.map((type) => (
          <button
            key={type}
            className={`px-4 py-2.5 rounded-md border-2 border-border font-semibold leading-[1.3] text-[var(--grey-10)] cursor-pointer text-nowrap ${
              activeTab === type ? "bg-secondary-background" : "bg-white"
            }`}
            onClick={() => setActiveTab(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Gallery Items */}
      <div>
        {filteredItems.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GalleryContent;
