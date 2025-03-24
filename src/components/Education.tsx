import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="Master of Computer Applications"
            subTitle="Guru Ghasidas Central University (2021 - 2023)"
            result="Bilaspur (C.G.)"
            des="Completed Master of Computer Applications (MCA) from Guru Ghasidas Central University, Bilaspur, with a specialization in software engineering and development."
          />
          <ResumeCard
            title="Bachelor Of Computer Applications"
            subTitle="Sant Gahira Guru Vishwavidyalaya (2017 - 2020)"
            result="Ambikapur (C.G.)"
            des="Completed Bachelor of Computer Applications (BCA) from Shri Sai Baba Aadarsh Mahavidhyalaya, Ambikapur, under Sant Gahira Guru University, specializing in software development."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Additional Qualifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Foundational C# with Microsoft"
            subTitle="freeCodeCamp"
            result="Oct - Dec 2024"
            des="Earned certification in C# fundamentals, mastering object-oriented programming, exception handling, and API integration through Microsoft's structured curriculum."
          />
          <ResumeCard
            title="Full Stack .NET Development"
            subTitle="Naresh I Technologies, Hyderabad"
            result="Apr - Aug 2024"
            des="Completed an intensive Full Stack .NET Development course covering ASP.NET Core, C#, SQL Server, Entity Framework, and React.js with hands-on projects."
          />
          <ResumeCard
            title="C Language Training"
            subTitle="Naresh I Technologies, Hyderabad"
            result="Feb - Mar 2024"
            des="Acquired strong foundational knowledge in C programming, including data structures, memory management, and algorithmic problem-solving."
          />



        </div>
      </div>
    </motion.div>
  );
};

export default Education;
