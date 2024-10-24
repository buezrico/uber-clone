import { RiArrowDownSLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="h-16 w-full flex items-center justify-center bg-black text-white">
      <div className="w-11/12 flex justify-between">
        <div className="flex items-center gap-8">
          <h3 className="text-2xl">Uber</h3>

          <ul className="hidden lg:flex items-center">
            <li className="cursor-pointer px-4 py-1 hover:bg-slate-800 rounded-full ">
              Ride
            </li>
            <li className="cursor-pointer px-4 py-1 hover:bg-slate-800 rounded-full ">
              Drive
            </li>
            <li className="cursor-pointer px-4 py-1 hover:bg-slate-800 rounded-full ">
              Uber Eats
            </li>
            <li className="cursor-pointer px-4 py-1 hover:bg-slate-800 rounded-full flex items-center gap-1">
              About <RiArrowDownSLine />
            </li>
          </ul>
        </div>

        <div className="flex ">
          <div className="hidden lg:flex cursor-pointer px-4 py-1 hover:bg-slate-800 rounded-full items-center gap-1">
            <TbWorld />
            EN
          </div>
          <p className="hidden lg:flex cursor-pointer px-4 py-1 hover:bg-slate-800 rounded-full ">
            Help
          </p>

          <button className="cursor-pointer px-4 py-1 hover:bg-slate-800 rounded-full ">
            Log in
          </button>
          <button className="cursor-pointer px-4 py-1 bg-slate-50 hover:bg-slate-300 text-black rounded-full ">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
