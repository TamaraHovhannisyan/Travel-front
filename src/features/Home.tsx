import { Sparkle } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center px-6 md:px-20 py-10 space-y-10 mt-[90px]">
      <div className="hidden md:flex justify-between items-center gap-5">
        <Sparkle className="w-12 h-12 text-amber-950" />
        <h1 className="text-4xl md:text-[100px] font-serif tracking-tight text-amber-950 text-center">
          NomadSphere
        </h1>
        <Sparkle className="w-12 h-12 text-amber-950" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <h2 className="text-2xl md:text-[35px] font-black tracking-wide text-amber-950 leading-tight">
          Your Next Adventure Awaits
        </h2>
        <p className="text-base md:text-lg text-amber-800">
          Inspiring Travel,
          <br />
          One Destination at a Time
        </p>
      </div>

      <div className="w-full">
        <img
          src="/person.png"
          alt="Traveler"
          className="w-full max-h-[500px] object-cover rounded-2xl shadow-md"
        />
      </div>
    </div>
  );
};

export default Home;
