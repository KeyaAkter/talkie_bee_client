const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className="bg-violet-500 text-white py-3 rounded hover:bg-violet-600 mt-5"
    >
      {text}
    </button>
  );
};

export default Button;
