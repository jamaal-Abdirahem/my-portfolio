function ProjectCard({ title, description }) {
  return (
    <div
      className="px-6 py-8 font-rubik rounded-3xl bg-gray-800 text-justify hover:shadow-[0_0_20px_4px_rgba(251,191,36,0.1)] 
  transition-shadow duration-300
  cursor-pointer"
    >
      <div className="px-30 py-25 rounded-2xl mb-4  bg-gradient-to-br from-[#4B00E0] via-[#8E2DE2] to-[#FF6A00]">
        <h1 className="font-syne text-4xl capitalize text-center">{title}</h1>
      </div>
      <h3 className="text-[16px] font-bold capitalize mb-1">{title}</h3>
      <p className="text-[14px]">{description}</p>
    </div>
  );
}

export default ProjectCard;
