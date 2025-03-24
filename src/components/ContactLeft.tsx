import {  FaLinkedinIn, FaGithub, FaFreeCodeCamp } from "react-icons/fa";
import { contactImg } from "../assets";
import {  } from "react-icons/si";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Bhushan Kumar Yadav</h3>
        <p className="text-lg font-normal text-gray-400">
          .NET Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        "Have an idea or opportunity? Let’s discuss and build together!"
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9399158976</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">kumarbhuvan718@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://learn.microsoft.com/en-us/users/bhushankumaryadav-9265/"
           target="_blank">
            <span className="bannerIcon">
              <FaFreeCodeCamp/>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/bhushan-kumar-yadav-840200333/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/Bhuvancode200" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
