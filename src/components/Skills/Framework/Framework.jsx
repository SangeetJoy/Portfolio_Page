import "../Skills.css"
import framework from "../../../assets/framework.png"
import reactIcon from "../../../assets/reactIcon.png"
import jestIcon from "../../../assets/jestIcon.png"
import muiIcon from "../../../assets/muiIcon.png"
import reduxIcon from "../../../assets/reduxIcon.png"
const languagesData = [
    {
        skillName: "React",
        skillImage: reactIcon
    },
    {
        skillName: "Redux",
        skillImage: reduxIcon
    },
    {
        skillName: "Jest",
        skillImage: jestIcon
    },
    {
        skillName: "Material UI",
        skillImage: muiIcon
    }
]
const listItems = languagesData.map(({ skillName, skillImage }, index) => {
    return (
        <li key={index}>
            <img src={skillImage} alt="img" />
            {skillName}
        </li>
    )
})
function Frameworks() {
    return (
        <div className="framework_container">
            <img alt="img" src={framework} className="skills_image"></img>
            <h2 className="skills_heading">Framework</h2>
            <h3 className="skills_subheading">I value simple content structure, clean design patterns, and thoughtful interactions.</h3>
            <h4 className="skills_title_note">Framework / Libraries i use:</h4>
            <ul className="skills_list_container">
                {listItems}
            </ul>
        </div>
    );
}

export default Frameworks;