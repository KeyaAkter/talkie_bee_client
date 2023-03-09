const ErrorMsg = ({ error }) => {
  return (
    <p className="bg-rose-50 text-rose-50 p-5 rounded border border-rose-500">
      {error}
    </p>
  );
};

export default ErrorMsg;
