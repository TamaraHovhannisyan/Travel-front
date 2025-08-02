import { Sparkle } from "lucide-react";

interface ExperienceItem {
  img: string;
  title: string;
  text: string;
}

const ExperiencPost = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-5 max-w-sm w-full">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h3 className="text-xl font-bold text-amber-950 mb-2">{item.title}</h3>

      <p className="text-sm text-amber-800 mb-4">{item.text}</p>

      <div className="flex items-center gap-2 border-t pt-3 border-amber-950">
        <a
          href="#"
          className="text-amber-950 border-b-1 font-semibold text-sm hover:text-amber-700 transition"
        >
          Explore
        </a>
        <Sparkle className="text-amber-950 w-4 h-4" />
      </div>
    </div>
  );
};

export default ExperiencPost;
