import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="data:image/png;base64,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"
              className="h-8"
              alt="Movie Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cyber Cinema
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://www.facebook.com/datdz.vn21/?locale=vi_VN"
            className="hover:underline"
          >
            Created by CTTNHH Trần Văn Báo
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
