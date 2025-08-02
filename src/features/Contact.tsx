import { Sparkle } from "lucide-react";

const Contact = () => {
  const backgroundImageUrl =
    "https://www.scenic.com.au/-/media/project/scenic/scenic-tours/scenic-au/blog/3000-x-1500-header-banner/scl_swiss_alps_switzerland_001_3000x1500.jpg";

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[450px] sm:h-[500px] md:h-[550px] lg:h-[400px] mt-10 mx-4 rounded-2xl shadow-md flex items-center justify-center"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
      }}
    >
      <div className="bg-white bg-opacity-90 px-6 sm:px-10 py-6 sm:py-8 rounded-2xl w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-0 text-center lg:text-left">
        <div className="space-y-3 text-amber-950 font-mono text-base sm:text-lg">
          <p>Destinations</p>
          <p>Experiences</p>
          <p>Travel Guides</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-950">
            Contact Us
          </h2>
          <button className="bg-amber-950 text-white px-4 py-2 rounded-md flex items-center gap-2 font-mono text-sm sm:text-base shadow mx-auto lg:mx-0">
            <Sparkle className="w-4 h-4" />
            Book A Call
          </button>
        </div>

        <div className="space-y-3 text-amber-950 font-mono text-base sm:text-lg">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>YouTube</p>
          <p>Telegram</p>
          <p>WhatsApp</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
