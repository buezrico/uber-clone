/* eslint-disable react/prop-types */
import Button from "./Button";

const Service = ({
  image,
  title,
  description,
  buttonLabel,
  link,
  direction,
}) => {
  return (
    <section className="h-full w-full flex items-center justify-center py-20">
      <div
        className={`w-[90%] flex  items-center justify-between ${direction}`}
      >
        <div className="w-[50%]">
          <img src={image} alt="" />
        </div>

        <div className="w-[40%] flex flex-col gap-8">
          <h3 className="text-5xl font-bold">{title}</h3>
          <p>{description}</p>

          <div className="flex items-center gap-8">
            <Button label={buttonLabel} />
            <button className="border-b pb-1 border-slate-500 hover:decoration-black">
              {link}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
