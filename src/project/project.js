import "./project.css";
import { ProjectCard } from "./projectCard";
import projects from "./projects.json";

export function Project() {

  const  projectsData = projects;

  const handleChange = (e) => {
    const pClassList = e.target.parentElement;
    if (e.target.classList.contains("notakenCategory")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "p-ctg takenCategory") {
          pClassList.childNodes[i].className = "p-ctg notakenCategory";
        }
      }
      e.target.classList.remove("notakenCategory");
      e.target.classList.add("takenCategory");
    } else if (e.target.classList.contains("taken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "p-ctg takenCategory") {
          pClassList.childNodes[i].className = "p-ctg notakenCategory";
        }
      }
    }
  };
  return (
    <div className="project">
      <div className="project-header">
        <h1>
          Our Projects<p>Home / Project</p>
        </h1>
      </div>
      <div className="project-categories">
        <ul>
          <ol className="p-ctg notakenCategory" onClick={handleChange}>
            Bedroom
          </ol>
          <ol className="p-ctg notakenCategory" onClick={handleChange}>
            Bathroom
          </ol>
          <ol className="p-ctg notakenCategory" onClick={handleChange}>
            Kitchen
          </ol>
          <ol className="p-ctg notakenCategory" onClick={handleChange}>
            Living Area
          </ol>
        </ul>
      </div>
      <div className="our-projects">
        {projectsData !== undefined && !!projectsData.projects.length 
        && projectsData.projects.map((pro, ind)=>{
          return (
          <ProjectCard props = {pro} key={ind}/>
          )
        })}
      </div>
    </div>
  );
}
