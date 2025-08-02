import { Sparkle } from "lucide-react";

const AboutUs = () => {
  return (
 <div className="relative w-full h-screen overflow-hidden">
  <img
    className="absolute top-0 left-0 w-full h-full object-cover scale-125 z-0"
    src="/swiz.png"
    alt="Background"
  />


      <div className="relative z-10 max-w-md min-h-[600px] bg-white bg-opacity-90 rounded-2xl border border-amber-950 px-6 md:px-8 py-10 m-6 md:m-14 flex flex-col justify-between shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <Sparkle className="text-amber-950 w-5 h-5" />
          <h2 className="text-2xl font-black text-amber-950 font-serif text-center flex-1">
            About <span className="text-amber-950">NomadSphere</span>
          </h2>
          <Sparkle className="text-amber-950 w-5 h-5" />
        </div>

        <div className="text-sm text-amber-800 font-mono space-y-4 leading-relaxed">
          <p>We don’t just plan trips. We craft unforgettable stories.</p>

          <p>
            At <strong>NomadSphere</strong>, we believe that travel should feel
            personal, seamless, and full of meaning. Our team of passionate
            explorers, travel designers, and local partners works together to
            create journeys that go beyond the typical itinerary.
          </p>

          <p>
            We’re proudly based in Slovenia, right by the foothills of the
            Julian Alps – a place that inspires us daily to seek beauty,
            adventure, and authenticity in every journey we design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
