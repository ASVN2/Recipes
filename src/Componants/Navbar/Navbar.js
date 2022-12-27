import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Navbar() {
  return (
    <div className="nav">
      <nav className="Navbar flex text-3xl mt-6 justify-between border-b pb-12 border-gray-500">
        <div className="logo uppercase font-bold text-green-500 border px-2 cursor-pointer hover:bg-green-500 hover:text-black">Resual</div>
        <div className="links flex gap-4">
          <Link to="/" className="badge transition-all  text-3xl h-full pb-1 hover:bg-green-500 hover:text-black px-5">
            Home
          </Link>
          <Link to="/D" className="badge transition-all  text-3xl h-full pb-1 hover:bg-green-500 hover:text-black px-5">
            new respae
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
