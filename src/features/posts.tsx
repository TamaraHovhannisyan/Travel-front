interface PostProps {
  item: {
    img: string;
    title: string;
    text: string;
    cost: string;
    night: string;
  };
}

const Posts = ({ item }: PostProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-amber-950 mb-1">{item.title}</h3>
        <p className="text-sm text-amber-800 mb-3">{item.text}</p>
        <div className="flex justify-between text-amber-900 font-semibold">
          <span>{item.cost}</span>
          <span>{item.night}</span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
