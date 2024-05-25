import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
import { FaCaretDown } from "react-icons/fa";
const Navbar = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
      link: "/#"
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#"
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#"
    },
    {
      id: 4,
      name: "Mens Wear",
      link: "/#"
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#"
    }
  ];

  const dropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#"
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#"
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#"
    }
  ];
  return (
    <div className="w-full shadow-md relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="flex container justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm-text-3xl flex gap-2">
              <img src={logo} alt="" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* search bar and order button */}

          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center justify-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>

              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* order button */}

            {/* darkmode button */}
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>

      {/* lower navbar */}
      <div className="flex justify-center dark:bg-black ">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="px-4 hover:text-primary duration-200"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
          {/* dropdown */}
          <li className="group relative cursor-pointer">
            <a href="" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                {" "}
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>

            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {dropdownLinks.map((data) => {
                  return (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
