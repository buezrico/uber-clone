import { IoIosSend } from "react-icons/io";
import hero_img from "../assets/hero-img.webp";

const Hero = () => {
  return (
    <main className="min-h-screen w-full bg-black text-white flex justify-center py-16">
      <div className="w-11/12 h-full gap-8 flex flex-col lg:flex-row lg:items-center lg:justify-center">
        <div className="w-full lg:w-1/2">
          <div className="w-4/5">
            <h1 className="text-[2.5rem] lg:text-[3.25rem] font-bold leading-tight mb-8">
              Go anywhere with Uber
            </h1>
            <p className="text-slate-200 text-lg">
              Request a ride, hop in, and go.
            </p>

            <div className="mt-4 flex flex-col gap-3 relative">
              <div className="h-12 rounded-md bg-white flex justify-between px-2 pl-12 gap-2">
                <input
                  className="outline-none text-black text-lg w-full"
                  type="text"
                  placeholder="Enter Location"
                />
                <div className="h-full flex items-center justify-center px-2">
                  <IoIosSend className="text-red-600" size={28} />
                </div>
              </div>
              <div className="h-12 rounded-md bg-white flex justify-between px-2 pl-12 gap-2">
                <input
                  className="outline-none text-black text-lg w-full"
                  type="text"
                  placeholder="Enter Destination"
                />
              </div>

              <div className="flex flex-col items-center w-fit absolute top-5 left-5">
                <div className="p-[0.15rem] w-fit bg-black rounded-full flex items-center justify-center">
                  <div className="h-1 w-1 bg-white rounded-full"></div>
                </div>
                <div className="h-12 w-[1px] bg-white"></div>
                <div className="p-[0.15rem] w-fit bg-black flex items-center justify-center">
                  <div className="h-1 w-1 bg-white shadow"></div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-white py-3 px-8 rounded-md text-black font-semibold">
                See prices
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <img src={hero_img} alt="girl in uber" className="w-full" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
