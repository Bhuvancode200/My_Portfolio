import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND GIVE ME YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 xl:gap-12 px-4">
          {/* <ProjectsCard
            title="
            Speak2Order: AI-Powered Voice Ordering Assistant"
            des="The primary goal of Speak2Order is to enable users, including those with disabilities or accessibility challenges, to order effortlessly through a conversational AI system. 
              By dynamically filtering products based on ratings, discounts, and delivery speed, the system ensures an optimized and personalized shopping experience while reducing the complexity of navigating multiple apps."
            title2="Key Features"
            des2={`✔ Conversational AI Interface – Voice-command-based ordering
✔ Multi-Category Ordering – Supports food, groceries, fashion, and more
✔ Smart Filtering System – Ranks products based on ratings, discounts, and delivery time
✔ Cross-Platform Integration – Fetches best deals from Swiggy, Zomato, Flipkart, etc.
✔ Real-Time Order Tracking & Secure Payment Processing
🔹 Tech Stack: ASP.NET Web API, React.js, Tailwind CSS, C#, SQL Server`}
            src={projectOne}
            GithubLink="https://github.com/yourusername/speak2order"
          /> */}
          <ProjectsCard
            title="Young Masters Chess Club"
            des="An AI-driven chess coaching platform designed for young children to learn chess interactively. It offers AI-assisted training, engaging tournaments, and real-time coaching sessions to make learning fun and effective."
            title2="Key Features"
            des2={`✔ AI Chess Trainer – Skill-based difficulty assessment
✔ Live Classes & Scheduling – Google Calendar integration
✔ Tournaments & Leaderboards – Tracks player rankings dynamically
✔ Parent Dashboard – Monitors progress with performance reports
✔ Secure Authentication & Gamification Elements
🔹 Tech Stack: ASP.NET Core, React.js, SQL Server, Stockfish/Lichess API`}
            src={projectTwo}
            GithubLink="https://github.com/Bhuvancode200"

          />

          <ProjectsCard
            title="Online School Management System"
            des="A web-based platform designed to improve school management by centralizing student data, attendance records, and communication between teachers, students, and parents. It ensures a smooth and organized approach to school operations."
            title2="Key Features"
            des2={`✔ Student & Teacher Management – Secure record system
✔ Authentication & Role-Based Access – Separate dashboards
✔ Attendance & Grade Tracking – Automated performance records
✔ Parent-Teacher Communication – Messaging & updates
✔ Scalable & Responsive UI for seamless experience
🔹 Tech Stack: ASP.NET Web API, React.js, SQL Server`}
            src={projectThree}
            GithubLink="https://github.com/Bhuvancode200/Online-School-Management-System"

          />
          <ProjectsCard
  title="Generic Repository Pattern in ASP.NET Core"
  des="This project demonstrates a scalable and reusable Generic Repository Pattern using ASP.NET Core and Entity Framework Core. 
    It provides a structured way to manage database operations with better separation of concerns, making it easier to maintain and extend."
  title2="Key Features"
  des2={`✔ Generic Repository Implementation – Centralized CRUD operations for multiple entities
✔ Dependency Injection – Decoupled and modular repository design
✔ Entity Framework Core Integration – Efficient database interactions
✔ RESTful API – Standardized API structure with Swagger documentation
✔ Scalable & Maintainable Architecture – Encourages clean code and best practices
🔹 Tech Stack: ASP.NET Core Web API, Entity Framework Core, C#, SQL Server`}
  src={projectOne}
  GithubLink="https://github.com/Bhuvancode200/Generic-Repository" // Add this line

/>


          {/* <ProjectsCard
            title="Hospital Management System"
            des="A modern healthcare platform for managing patient records, doctor schedules, and billing efficiently."
            title2="Key Features"
            des2={`✔ Patient Registration & Electronic Health Records (EHR)
✔ Doctor & Staff Scheduling – Manages availability
✔ Billing & Invoicing – Automated medical billing
✔ Role-Based Access Control – Secure permissions
✔ Prescription & Lab Reports – Digital records
✔ User Authentication & Security
🔹 Tech Stack: ASP.NET Core Web API, React.js, Bootstrap, SQL Server`}
            src={projectThree}
            GithubLink="https://github.com/yourusername/speak2order"
          /> */}
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
