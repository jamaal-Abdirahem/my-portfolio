import ProjectCard from "../components/ProjectCard";
import Header from "../layouts/Header";

function Home() {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
  ];
  return (
    <div className="">
      <Header />
      {/* Main Section (Hero) */}
      <div className="mt-15 max-w-2xl mx-auto flex flex-col gap-15 items-center">
        <h1 className=" text-4xl capitalize font-syne text-center">
          Creative Frontend Developer for Modern Web Apps
        </h1>
        <button
          className="
  text-[16px] font-rubik 
   bg-orange-500 p-3 rounded-lg 
  hover:shadow-[0_0_20px_4px_rgba(251,191,36,0.6)] 
  transition-shadow duration-300
  cursor-pointer
"
        >
          EXPLORE WORKS
        </button>
      </div>
      {/* About Me Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-justify">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight font-syne">
              Let’s get to know <br /> about me closer
            </h2>
            <p className="text-lg font-rubik ">
              I am a Mogadishu-based frontend developer focusing on creating
              beautiful and user-friendly web experiences. My portfolio
              showcases a wide range of work, spanning responsive websites,
              interactive web applications, and more.
            </p>
            <button
              className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:shadow-[0_0_20px_4px_rgba(251,191,36,0.6)] 
  transition-shadow duration-300
  cursor-pointer"
            >
              Discover More About Me
            </button>
          </div>

          {/* Right Image with decorations */}
          <div className="relative flex justify-center md:justify-end">
            <img
              src="/images/jamal's photo.png"
              alt="jamal's photo"
              className="rounded-xl w-55 h-70 md:w-72 md:h-80 lg:w-96 lg:h-[430px] object-cover object-top shadow-[0_0_20px_4px_rgba(251,191,36,0.09)]"
            />
          </div>
        </div>
      </div>
      {/* Projects Highlights */}
      <div className="py-16 px-6">
        <div className="mt-15 max-w-2xl mx-auto flex flex-col gap-15 items-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight font-syne">
            My Projects Highlight
          </h2>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-10 mt-15">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        <button className="relative mt-10 text-2xl text-center font-rubik group cursor-pointer">
          see more
          <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
}

export default Home;
