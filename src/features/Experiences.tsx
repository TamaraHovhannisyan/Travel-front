import { Sparkle } from "lucide-react";
import type { ReactElement } from "react";
import ExperiencPost from "./ExperiencPost";

const Experiences = () => {
  const data = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwhyqrttMTwtfxdwotFLxTV4hP8IKBTKk03637LuG9rbPHf3B6RNP4bAVXEOSVMBarnQ&usqp=CAU",
      title: "Adventure & Nature",
      text: "Adventure, forests, and wild, places - for thos eho love action and fresh air",
    },
    {
      img: "https://luxuryescapes.com/inspiration/wp-content/uploads/2023/11/gulmarg-shutterstock_2232862285-1024x576.jpg",
      title: "Winter Escapes",
      text: "Snow, mountains, and cozy chalets – ideal for ski lovers and winter romance",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6b6Rq5NOwtsoKI0fBAtJ26Boj7FrQgV_UbfAvP0fvg9ESo5IueCtqXuNkL7QhGb4sFw&usqp=CAU",
      title: "Peaceful Retreats",
      text: "Tranquil getaways for those seeking relaxation, mindfulness, and silence",
    },
  ];
  return (
    <div className="flex flex-col justify-center px-6 md:px-20 py-14 bg-white">
      <div className="flex justify-between items-center gap-5 border-b-2 pb-4 border-amber-950">
        <Sparkle className="w-8 h-8 text-amber-950" />
        <h1 className="text-3xl md:text-[50px] font-serif tracking-tight text-amber-950">
          Experiences
        </h1>
        <Sparkle className="w-8 h-8 text-amber-950" />
      </div>
      <div className="flex flex-wrap gap-8">
        {data.map(
          (item, index): ReactElement => (
            <ExperiencPost key={index} item={item} />
          )
        )}
      </div>
    </div>
  );
};

export default Experiences;
