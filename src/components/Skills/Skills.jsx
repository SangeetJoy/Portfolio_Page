import "./Skills.css"
import Languages from "./Languages/Languages"
import Tools from "./Tools/Tools"
import Frameworks from "./Framework/Framework"
function Skills() {
  return (
    <>
      <section className="skills_section">
        <h1 className="skills_text">Sk<span>i</span>lls</h1>
        <section className="skills_container">
          <Tools />
          <Languages />
          <Frameworks />
        </section>
      </section>
      <div className="skillsBreak"></div>
    </>
  );
}

export default Skills;