import { useEffect } from "react";

const Tabs = ({ tabState, setTabState }) => {
  const cambiarTab = (categoria) => {
    setTabState(categoria);
  };

  useEffect(() => {
    console.log(tabState);
  }, [tabState]);

  return (
    <div className="mt-5 md:mt-10 text-sm font-medium text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700 mx-auto">
      <ul className="grid grid-cols-3 md:grid-cols-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-7">
        <li className="m-0">
          <a
            href="#"
            className={`${
              tabState === ""
                ? "active inline-block px-4 py-3 text-white bg-black rounded-lg"
                : "inline-block px-4 py-3 text-black bg-white rounded-lg hover:bg-gray-50"
            } `}
            aria-current="page"
            onClick={() => cambiarTab("")}
          >
            Todo
          </a>
        </li>
        <li className="m-0">
          <a
            href="#"
            className={`${
              tabState === "Monitor"
                ? "active inline-block px-4 py-3 text-white bg-black rounded-lg"
                : "inline-block px-4 py-3 text-black bg-white rounded-lg hover:bg-gray-50"
            } `}
            aria-current="page"
            onClick={() => cambiarTab("Monitor")}
          >
            Monitores
          </a>
        </li>
        <li className="m-0">
          <a
            href="#"
            className={` ${
              tabState === "Mouse"
                ? "active inline-block px-4 py-3 text-white bg-black rounded-lg"
                : "inline-block px-4 py-3 text-black bg-white rounded-lg hover:bg-gray-50"
            } `}
            onClick={() => cambiarTab("Mouse")}
          >
            Mouses
          </a>
        </li>
        <li className="m-0">
          <a
            href="#"
            className={` ${
              tabState === "Teclado"
                ? "active inline-block px-4 py-3 text-white bg-black rounded-lg"
                : "inline-block px-4 py-3 text-black bg-white rounded-lg hover:bg-gray-50"
            } `}
            onClick={() => cambiarTab("Teclado")}
          >
            Teclados
          </a>
        </li>
        <li className="m-0">
          <a
            href="#"
            className={` ${
              tabState === "Mousepad"
                ? "active inline-block px-4 py-3 text-white bg-black rounded-lg"
                : "inline-block px-4 py-3 text-black bg-white rounded-lg hover:bg-gray-50"
            } `}
            onClick={() => cambiarTab("Mousepad")}
          >
            Mousepads
          </a>
        </li>
        <li className="m-0">
          <a
            href="#"
            className={` ${
              tabState === "Auricular"
                ? "active inline-block px-4 py-3 text-white bg-black rounded-lg"
                : "inline-block px-4 py-3 text-black bg-white rounded-lg hover:bg-gray-50"
            } `}
            onClick={() => cambiarTab("Auricular")}
          >
            Auriculares
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
