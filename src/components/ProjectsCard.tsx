import { BsGithub } from "react-icons/bs";

interface Props {
  title: string;
  des: string;
  title2: string;
  des2: string;
  src: string;
  GithubLink: string;
}

const ProjectsCard = ({ title, des, title2, des2, src }: Props) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      {/* Image container */}
      <div className="w-full h-[250px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="project"
        />
      </div>

      {/* Content container */}
      <div className="w-full mt-5 flex flex-col gap-6">
        {/* Title Section */}
        <div className="min-h-[80px] flex flex-col justify-center">
          <h3 className="text-xl font-bold text-center text-designColor leading-normal px-4">
            {title}
          </h3>
        </div>

        {/* Description Section */}
        <div className="min-h-[100px] px-2">
          <p className="text-base text-center tracking-wide hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>

        {/* GitHub Link */}
        <div className="flex justify-center">
          <a href="bhuvancode200" target="_blank" rel="noopener noreferrer">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <BsGithub />
            </span>
          </a>
        </div>

        {/* Key Features Section */}
        <div className="mt-4">
          <h4 className="text-sm font-medium uppercase text-gray-300 mb-4 text-center">
            {title2}
          </h4>
          <ul className="list-disc list-inside text-gray-400 space-y-2 px-4">
            {des2.split("\n").map((point, index) => (
              <li key={index} className="text-sm">
                {point.trim()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default ProjectsCard;
