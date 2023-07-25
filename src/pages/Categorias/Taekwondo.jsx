import { Link } from "react-router-dom";
const Taekwondo = () => {
  return (
    <>
      <div className="flex flex-row">
        <Link className="cursor-pointer" to="/productos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>
        <h3 className="mx-4">Taekwondo</h3>
      </div>
      <div className="flex flex-row w-full gap-8">
        <div className="mt-10 bg-white w-60 border border-gray-200 shadow-sm rounded-lg">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_2X_623609-MLA53985356813_022023-F.webp"
            alt="guantesBox"
            className="h-60 w-60 rounded-lg"
          />
          <div className="m-4">
            <h4 className="font-bold">Guantes Everlast</h4>
            <p>EVERLAST PRO STYLE y PRO STYLE 2</p>
            <p className="text-green-600">$ 27.677</p>
          </div>
        </div>
        <div className="mt-10 bg-white w-60 border border-gray-200 shadow-sm rounded-lg">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_2X_623609-MLA53985356813_022023-F.webp"
            alt="guantesBox"
            className="h-60 w-60 rounded-lg"
          />
          <div className="m-4">
            <h4 className="font-bold">Guantes Everlast</h4>
            <p>EVERLAST PRO STYLE y PRO STYLE 2</p>
            <p className="text-green-600">$ 27.677</p>
          </div>
        </div>
        <div className="mt-10 bg-white w-60 border border-gray-200 shadow-sm rounded-lg">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_2X_623609-MLA53985356813_022023-F.webp"
            alt="guantesBox"
            className="h-60 w-60 rounded-lg"
          />
          <div className="m-4">
            <h4 className="font-bold">Guantes Everlast</h4>
            <p>EVERLAST PRO STYLE y PRO STYLE 2</p>
            <p className="text-green-600">$ 27.677</p>
          </div>
        </div>
        <div className="mt-10 bg-white w-60 border border-gray-200 shadow-sm rounded-lg">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_2X_623609-MLA53985356813_022023-F.webp"
            alt="guantesBox"
            className="h-60 w-60 rounded-lg"
          />
          <div className="m-4">
            <h4 className="font-bold">Guantes Everlast</h4>
            <p>EVERLAST PRO STYLE y PRO STYLE 2</p>
            <p className="text-green-600">$ 27.677</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taekwondo;
