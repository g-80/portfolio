import Project from "./Project";
import projectsData from "../data/projectsData";

const ProjectsList = (): JSX.Element => {
  return (
    <div>
      {projectsData.map((project, index) => {
        return (
          <Project
            key={index}
            image={project.image}
            name={project.name}
            description={project.description}
            tags={project.tags}
            github={project.github}
            link={project.link}
          />
        );
      })}
    </div>
  );
};

export default ProjectsList;
