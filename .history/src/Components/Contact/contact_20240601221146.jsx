import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Layouts/Button.jsx";
import Appointment from "../Appointment/Appointment.jsx";
import { Link } from "react-router-dom";
const Contact = ({}) => {
  return (
    <div>
      <div className="appointment">
        <button>Book Appointment</button>
      </div>
      <div className="container">
        <div className="row flex justify-between">
          <div className="w-1/3 p-4 col-xl-4 col-lg-4 col-md-4">
            <div className="contact text-center mb-30">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#ffffff"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              <h3>Mail Here</h3>
              <p>healthbuddy@gmail.com</p>
            </div>
          </div>
          <div className="w-1/3 p-4 col-xl-4 col-lg-4 col-md-4">
            <div className="contact text-center mb-30">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#ffffff"
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  />
                </svg>
              </div>
              <h3>Call Here</h3>
              <p>(+92) 333567789</p>
            </div>
          </div>
          <div className="w-1/3 p-4  col-xl-4 col-lg-4 col-md-4">
            <div className="contact text-center mb-30">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="10"
                  width="10"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ffffff"
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  />
                </svg>
              </div>
              <h3>Pharmacy</h3>
              <p>(+92) 333567789</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex items-center justify-center mt-10 bg-gray-50 pt-8 pb-8">
          <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
            <h1 className="text-4xl font-semibold text-center text-black">
              Anything On Your Mind
            </h1>
            {/* <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <div className=" flex flex-col">
            <textarea
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="message"
              id="message"
              placeholder="Your Message"
            />
          </div>
          <div className=" flex gap-5 align-center ">
            <Button title="Submit" />
          </div> */}
          </form>
        </div>
      </div>
      <Appointment />
    </div>
  );
};

export default Contact;
