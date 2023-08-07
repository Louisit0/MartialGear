import React from "react";

const Tabs = () => {
  return (
    <div className=" text-sm font-medium text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700  mx-auto">
      <ul className="flex flex-wrap  text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-7">
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 text-white bg-sky-600 rounded-lg active"
            aria-current="page"
          >
            Monitores
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Mouses
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Teclados
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Mousepads
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Auriculares
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
