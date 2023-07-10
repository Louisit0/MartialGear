import "./App.css";
import NavBar from "./components/NavBar";
import "animate.css";

function App() {
  return (
    <div className="bg-slate-50 h-screen w-4/5 mx-auto">
      <header>
        <NavBar />
      </header>
      <main className="flex flex-row w-full select-none">
        <div className="flex w-full relative">
          <img
            src="https://images.unsplash.com/photo-1486215397028-cb4f31efea3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lja2JveGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
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

        <div className="flex flex-col w-3/5 items-end">
          <div className="flex rounded-xl ml-5 relative">
            <img
              src="https://e0.pxfuel.com/wallpapers/376/556/desktop-wallpaper-mayweather-boxeo.jpg"
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
          <div className="flex rounded-xl h-full mt-5 ml-5 relative ">
            <img
              src="https://blog.sportotal.com.ar/wp-content/uploads/2022/12/que-es-taekwondo-reglas-y-calificaciones.jpg"
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
        </div>
      </main>
    </div>
  );
}

export default App;
