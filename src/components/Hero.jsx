import { useState } from "react";
import { GoClockFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { IoCalendar } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";
import Button from "./Button";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    <main className="min-h-screen w-full  text-black flex justify-center py-16">
      <div className="w-[90%] h-full gap-8 flex flex-col lg:flex-row  lg:justify-center">
        <div className="w-full lg:w-1/2">
          <div className="w-full sm:w-4/5">
            <h1 className="text-[2.5rem] lg:text-[3.25rem] font-bold leading-tight mb-8">
              Go anywhere with Uber
            </h1>
            {/* <p className="text-slate-200 text-lg">
              Request a ride, hop in, and go.
            </p> */}

            <div className="mt-4 flex flex-col gap-6 relative">
              <div className="h-12 rounded-md bg-gray-100 flex justify-between  gap-2 relative">
                <input
                  className="outline-none bg-transparent text-black w-full px-2 pl-10 focus:ring-1 focus:ring-black rounded-md"
                  type="text"
                  placeholder="Pickup location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                />
                <div className="absolute top-0 right-2 h-full flex items-center justify-center px-2">
                  {pickupLocation.length > 0 ? (
                    <MdCancel className="text-slate-800" size={18} />
                  ) : (
                    <IoIosSend className="text-slate-800" size={24} />
                  )}
                </div>
              </div>
              <div className="h-12 rounded-md bg-gray-100 flex justify-between gap-2">
                <input
                  className="outline-none bg-transparent text-black w-full px-2 pl-10 focus:ring-1 focus:ring-black rounded-md"
                  type="text"
                  placeholder="Dropoff location"
                />
              </div>

              <div className="flex flex-col gap-1 items-center w-fit absolute top-5 left-5">
                <div className="h-2 w-2 bg-black rounded-full flex items-center justify-center">
                  {/* <div className="h-1 w-1 bg-white rounded-full"></div> */}
                </div>
                <div className="h-14 w-[1px] bg-black" />
                <div className="h-2 w-2  bg-black flex items-center justify-center">
                  {/* <div className="h-1 w-1 bg-white shadow"></div> */}
                </div>
              </div>

              <div className="flex gap-8 justify-between">
                <div className="h-12 rounded-md bg-gray-100 flex justify-between gap-2 relative">
                  <div className="absolute top-0 left-0 h-full flex items-center justify-center px-2">
                    <IoCalendar className="text-slate-800" size={16} />
                  </div>
                  <input
                    className="outline-none bg-transparent text-black w-full px-2 pl-10 focus:ring-1 focus:ring-black rounded-md"
                    type="date"
                    placeholder="Today"
                  />
                </div>
                <div className="h-12 w-full rounded-md bg-gray-100 flex justify-between  gap-2 relative">
                  <div className="absolute top-0 left-0 h-full flex items-center justify-center px-2">
                    <GoClockFill className="text-slate-800" size={16} />
                  </div>
                  <div className="absolute top-0 right-2 h-full flex items-center justify-center px-2">
                    <RxCaretDown className="text-slate-800" size={20} />
                  </div>
                  <select
                    className="outline-none bg-transparent text-black w-full px-2 pl-10 focus:ring-1 focus:ring-black rounded-md appearance-none cursor-pointer"
                    type="text"
                    placeholder="Dropoff location"
                  >
                    <option value="">8:15 PM</option>
                    <option value="">8:30 PM</option>
                    <option value="">8:45 PM</option>
                    <option value="">9:00 PM</option>
                    <option value="">9:15 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button label="See prices" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56538.812290538015!2d-2.6254061869155163!3d7.4576745936347635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sgh!4v1730405724714!5m2!1sen!2sgh"
            className="w-full border-4 border-black rounded-md shadow-3xl"
            // width="600"
            height="550"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* <img src={hero_img} alt="girl in uber" className="w-full" /> */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
