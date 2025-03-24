import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaFreeCodeCamp } from "react-icons/fa";
import { SiCsharp, SiDotnet, SiMicrosoftsqlserver, SiVisualstudiocode } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Developer", ".NET Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="capitalize" style={{ color: "rgb(36, 202, 236)" }}>Bhushan Kumar Yadav</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        "I focus on creating intuitive and efficient user experiences in .NET applications by integrating responsive UI components and seamless interactions. Beyond aesthetics, my approach emphasizes scalability and performance, leveraging ASP.NET Core, C#, SQL Server, and API-driven architectures to build robust, user-friendly solutions."
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://learn.microsoft.com/en-us/users/bhushankumaryadav-9265/" target="_blank">
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
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiCsharp />
            </span>
            <span className="bannerIcon">
              <SiDotnet />
            </span>
            <span className="bannerIcon">
              <SiVisualstudiocode />
            </span>
            <span className="bannerIcon">
              <SiMicrosoftsqlserver />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;

