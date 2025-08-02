import { Sparkle } from "lucide-react";
import type { ReactElement } from "react";
import Posts from "./posts";

const Destinations = () => {
  const data = [
    {
      img: "https://www.grayline.com/wp-content/uploads/2025/01/Amalfi-coast-scaled.jpg",
      title: "Amalfi Coast, Italy",
      text: "Sun-drenched villages, coastal cliffs & authentic pasta dreams",
      cost: "890$",
      night: "5 nights",
    },
    {
      img: "https://www.grayline.com/wp-content/uploads/2025/01/Amalfi-coast-scaled.jpg",
      title: "Amalfi Coast, Italy",
      text: "Sun-drenched villages, coastal cliffs & authentic pasta dreams",
      cost: "900$",
      night: "9 nights",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbVLJpRyyWH-mSIc6jwXBMN7lquUOl2dJMA&s",
      title: "Mount Fuji, Japan",
      text: "Experience cherry blossoms and sacred serenity by the lake",
      cost: "1150$",
      night: "7 nights",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmYzwhBtWmSFJwMgMxCsEqSY1WCIjO4ol2g&s",
      title: "Cappadocia, Turkey",
      text: "Magical balloon rides over fairy chimneys and valleys",
      cost: "720$",
      night: "4 nights",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSey_mhFerRl2H5FSD0KHO4CDRLmXvw2goB7Q&s",
      title: "Paris, France",
      text: "Romantic escapes under the Eiffel Tower and elegant cafés",
      cost: "1320$",
      night: "6 nights",
    },
    {
      img: "https://bookmychutti.com/wp-content/uploads/2022/06/bali4-1024x673.jpg",
      title: "Bali, Indonesia",
      text: "Lush rice fields, temples, and tropical wellness retreats",
      cost: "950$",
      night: "8 nights",
    },
  ];

  return (
    <div className="flex flex-col justify-center px-6 md:px-20 py-14 bg-white">
      <div className="flex justify-between items-center gap-5 border-b-2 pb-4 border-amber-950">
        <Sparkle className="w-8 h-8 text-amber-950" />
        <h1 className="text-3xl md:text-[50px] font-serif tracking-tight text-amber-950">
          Destinations
        </h1>
        <Sparkle className="w-8 h-8 text-amber-950" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {data.map(
          (item, index): ReactElement => (
            <Posts key={index} item={item} />
          )
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-2 bg-amber-950 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition">
          <Sparkle size={18} />
          <span className="text-lg font-medium">More Destinations</span>
        </button>
      </div>
    </div>
  );
};

export default Destinations;
