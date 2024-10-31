// eslint-disable-next-line react/prop-types
const Button = ({ label }) => {
  return (
    <button className="bg-black py-3 px-8 rounded-lg text-white font-semibold">
      {label}
    </button>
  );
};

export default Button;
