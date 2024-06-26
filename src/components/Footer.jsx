import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="font-futurapt relative bg-[#f7f6f2] pt-8 pb-6">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* footer left, social media */}
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>

          {/* footer right side */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6 lg:px-12">
              {/* useful links */}
              <div className="w-full lg:w-4/12 px-4 ml-auto"
                  >
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                      to="/contact
                      "
                    >
                      Location
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                      to="/pricing"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-8/12 px-4">

              {/* contact info */}
                <span className="block uppercase font-semibold text-blueGray-500 text-sm mb-2">Contact Info</span>
                <a>
                  Cranstoun Hall, Pathhead, Midlothian, EH37 5RF<br />
                  07-939-195-465<br />
                  theeverestphysiotherapy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* copyright bottom */}
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-8/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Everest Physiotherapy by {}
              </a>
              <a
                href="https://dev.ujjan"
                className="text-red-400 hover:text-blueGray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                devujjan
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
