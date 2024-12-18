import React from "react";
import SectionTitle from "./SectionTitle";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const Contcat = () => {
  return (
    <div className=" py-24">
      <div className="align-element ">
        <SectionTitle text="contact me" />

        <div className=" flex flex-col gap-10 md:flex-row justify-between items-center w-full mt-8 md:gap-6">
          <div className="md:w-1/2 flex flex-col gap-4">
            <p className="flex text-slate-900 items-center gap-4 w-full text-xl">
              <MdEmail className="h-6 w-6 text-slate-500 hover:text-black duration-300" />{" "}
              joshinikhil505@gmail.com
            </p>
            <p className="flex text-slate-900 items-center gap-4 text-xl">
              <FaPhone className="h-6 w-6 text-slate-500 hover:text-black duration-300" />{" "}
              +91 7350567289
            </p>

            <p className="flex text-slate-900 items-center gap-4 text-xl">
              <FaLocationDot className="h-6 w-6 text-slate-500 hover:text-black duration-300" />{" "}
              Chhatrapati Sambhajinagar
            </p>
            <div className="border-b-2 w-96"></div>

            <h2 className="font-semibold text-2xl">Get in Touch</h2>
            <p className="text-slate-700 leading-loose">
              We’d love to hear from you! If you have any questions, comments,
              or need support, feel free to reach out using the form below, and
              we’ll get back to you as soon as possible.
            </p>
          </div>

          <form className="form bg-emerald-100 px-10 py-8 flex flex-col justify-center items-center gap-6 rounded-2xl">
            <h2 className="font-bold text-2xl">Email Me</h2>
            <input
              type="text"
              className="w-96 p-2 rounded-xl"
              placeholder="Type your Name"
            />
            <input
              type="email"
              className="w-96 p-2 rounded-xl"
              name=""
              id=""
              placeholder="enter your email"
            />
            <textarea
              name=""
              className="w-96 p-2 rounded-xl"
              placeholder="write your message"
              id=""
            ></textarea>
            <button
              type="button"
              className="px-4 py-2 capitalize bg-emerald-600 text-white rounded-lg text-2xl"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contcat;
