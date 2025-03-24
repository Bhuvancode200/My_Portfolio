import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements & Recognitions</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
  title="University-Level Coding Competition"
  subTitle="Achieved 5th Rank"
  result="Sant Gahira Guru University, Ambikapur (C.G.)"
  des="Secured 5th position in a university-level coding competition, demonstrating problem-solving skills and algorithmic proficiency."
/>
<ResumeCard
  title="East Zone National Chess Tournament"
  subTitle="Represented Sant Gahira Guru University (3 Times)"
  result="KIIT & KISS University, Bhubaneswar"
  des="Competed in the East Zone National Chess Tournament, representing the university three times, showcasing strategic thinking and competitive excellence."
/>
<ResumeCard
  title="College Chess Champion"
  subTitle="Twice Chess Champion"
  result="Shri Sai Baba Aadarsh Mahavidhyalaya, Ambikapur (C.G.)"
  des="Won the college chess championship twice, demonstrating strong analytical skills, decision-making, and competitive spirit."
/>

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
