import projectsList from "@/lib/projectsData";
import Project from "./project";

export function generateMetadata({ params }) {
  const project = projectsList.find(
    (project) => params.id === project.endpoint
  );

  const categoryMap = {
    business: "Comercial",
    residential: "Residencial",
    onGoing: "Em andamento",
  }

  return {
    title: `M² | Projetos - ${project.title}`,
    description: `M² Arquitetura | Categoria de projeto: ${categoryMap[project.category]}`,
  }
}


const ProjectPage = () => {
  return <Project />
};

export default ProjectPage;
