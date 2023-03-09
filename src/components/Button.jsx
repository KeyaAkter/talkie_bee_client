const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className="bg-emerald-500 text-white py-3 rounded hover:bg-emerald-600 mt-5"
    >
      {text}
    </button>
  );
};

export default Button;
