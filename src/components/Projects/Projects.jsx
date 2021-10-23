import "./Projects.css"
import ProjectCard from "../ProjectCard/ProjectCard"
import project2Pic from "../../assets/project2.png"
import project1DarkPic from "../../assets/project1Dark.png"
const projects = [
  {
    projectTitle: "NotesyFy",
    projectSubHeader: "Simple note taking app",
    projectImg: project1DarkPic,
    visitLink: "https://notesyfy.netlify.app/",
    codeLink: "https://github.com/SangeetJoy/Material_UI_Notes_App",
    projectContent: "created a good looking and animated quick note taking react application using material ui in its styling and firebase as the backend service and hosted on netlify.com"
  },
  {
    projectTitle: "Covid Tracker",
    projectSubHeader: "covid tracker app",
    projectImg: project2Pic,
    visitLink: "https://sangeetjoy.github.io/Covid-Tracker/",
    codeLink: "https://github.com/SangeetJoy/Covid-Tracker",
    projectContent: "created a simple looking covid tracker app with live data coming from a public API, have used data visualisation technology to display the covid data in a chart using chart.js package"
  }
]

function Projects() {
  return (
    <>
      <section className="projects">
        <h1 className="projectText">Pro<span>j</span>ects</h1>
        <div className="project_card_container">
          {
            projects.map(({ projectTitle, projectSubHeader, projectImg, projectContent, visitLink, codeLink }) => (
              <ProjectCard
                projectTitle={projectTitle}
                projectSubHeader={projectSubHeader}
                projectImg={projectImg}
                projectContent={projectContent}
                visitLink={visitLink}
                codeLink={codeLink}
              />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Projects