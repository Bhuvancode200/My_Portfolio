import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Software Development Engineer (Intern)"
            subTitle="SideKick (2024 - 2025)"
            result="Raipur (C.G.)"
            des="Gained hands-on experience as a Back-End Developer, designing, coding, testing, and debugging scalable applications. Collaborated with cross-functional teams to analyze user requirements and develop optimized software solutions. Participated in code reviews, ensuring adherence to best practices and high-quality standards. Contributed to the architecture and implementation of backend systems while strengthening expertise in .NET, C#, SQL Server, and modern development methodologies."
          />
          
        </div>
      
    
    </motion.div>
  );
};

export default Experience;
