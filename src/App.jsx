import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import mini_car from "./assets/car.png";
import Service from "./components/Service";
import asset_2 from "./assets/asset-2.webp";
import asset_3 from "./assets/asset-3.webp";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />

      <section className="w-full h-full flex items-center justify-center py-10">
        <div className="w-11/12">
          <div className="w-full md:w-[50%] lg:w-[30%] flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Suggestions</h2>

            <div className="bg-slate-100 rounded-md p-4 flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold">Ride</p>
                <p className="text-xs">
                  Go anywhere with Uber. Request a ride, hop in, and go.
                </p>
                <button className="bg-slate-50 hover:bg-slate-300 rounded-3xl text-slate-800 font-semibold mt-2 w-fit px-2 py-1">
                  Details
                </button>
              </div>

              <div className="">
                <img src={mini_car} alt="mini car" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Service
        image={asset_2}
        title="Drive when you want, make what you need"
        description="Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber."
        buttonLabel="Get started"
        link="Already have an account? Sign in"
        direction="flex-row"
      />

      <Service
        image={asset_3}
        title="The Uber you know, reimagined for business"
        description="Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."
        buttonLabel="Get started"
        link="Check out our solutions"
        direction="flex-row-reverse"
      />
    </div>
  );
}

export default App;
