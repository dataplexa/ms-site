import projectsList from "@/lib/projectsData";
import Project from "./project";

export function generateMetadata({ params }) {
  const project = projectsList.find(
    (project) => params.id === project.endpoint
  );

  return {
    title: `Projetos | ${project.title}`,
  }
}


const ProjectPage = () => {
  return <Project />
};

export default ProjectPage;
