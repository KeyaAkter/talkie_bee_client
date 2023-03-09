import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="py-10 flex justify-between">
      <div className="logo">
        <Link
          to="/"
          className="text-xl font-semibold hover:text-emerald-500 duration-300"
        >
          TalkieBee
        </Link>
      </div>

      <nav>
        <div className="flex gap-5 ">
          <Link
            to="/login"
            className="hover:text-emerald-500 hover:underline underline-offset-2 duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="hover:text-emerald-500 hover:underline underline-offset-2 duration-300"
          >
            Register
          </Link>
        </div>

        {/* <div>
          <p>
            Logged in as : <span className="text-emerald-500">Tanisha</span>
          </p>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
