import { Link } from "react-router-dom";
import boxeo from "../assets/boxeo.jpg";

const Productos = () => {
  return (
    <div className="flex flex-row w-full">
      <Link to="/kickboxing">
        <div className="flex w-full relative">
          <img
            src={boxeo}
            alt="kickboxing"
            className="rounded-3xl brightness-50 hover:brightness-100 transition-all duration-300 ease-in-out cursor-pointer"
          />
          <div className="absolute top-0 left-0 m-10 text-white text-2xl font-bold">
            <h2 className="text-5xl cursor-pointer">Kickboxing</h2>
          </div>
          <div className="absolute bottom-0 right-0 m-10 text-white text-2xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </Link>

      <div className="flex flex-col w-3/5 items-end">
        <Link to="/boxeo">
          <div className="flex rounded-xl ml-5 relative">
            <img
              src={boxeo}
              alt="boxeo"
              className="rounded-3xl brightness-50 hover:brightness-100 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <div className="absolute top-0 left-0 m-10 text-white text-2xl font-bold">
              <h2 className="text-5xl cursor-pointer">Boxeo</h2>
            </div>
            <div className="absolute bottom-0 right-0 m-10 text-white text-2xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </Link>

        <Link to="/taekwondo">
          <div className="flex rounded-xl h-full mt-5 ml-5 relative ">
            <img
              src={boxeo}
              alt="taekwondo"
              className="rounded-3xl brightness-50 hover:brightness-100 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <div className="absolute top-0 left-0 m-10 text-white text-2xl font-bold">
              <h2 className="text-5xl cursor-pointer">Taekwondo</h2>
            </div>
            <div className="absolute bottom-0 right-0 m-10 text-white text-2xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
      {/* <button className="h-full my-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 mx-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button> */}
    </div>
  );
};

export default Productos;
