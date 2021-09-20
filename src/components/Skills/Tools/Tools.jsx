import "../Skills.css"
import toolsImage from "../../../assets/tools.png"
import vsCode from "../../../assets/visual-studio.png"
import reduxDevtools from "../../../assets/reduxDevtools.png"
import postman from "../../../assets/postman.png"
import gitIcon from "../../../assets/github.png"
import fireBaseIcon from "../../../assets/fireBasePic.png"
const toolsData = [
    {
        skillName: "Vs code",
        skillImage: vsCode
    },
    {
        skillName: "Redux Dev tools",
        skillImage: reduxDevtools
    },
    {
        skillName: "Postman",
        skillImage: postman
    },
    {
        skillName: "Github",
        skillImage: gitIcon
    },
    {
        skillName: "Firebase",
        skillImage: fireBaseIcon
    },
]
const listItems = toolsData.map(({ skillName, skillImage }, index) => {
    return (
        <li key={index}>
            <img src={skillImage} alt="img" />
            {skillName}
        </li>
    )
})
function Tools() {
    return (
        <div className="tools_container">
            <img className="skills_image" alt="img" src={toolsImage}></img>
            <h2 className="skills_heading">Dev Tools</h2>
            <h3 className="skills_subheading">I value simple content structure, clean design patterns, and thoughtful interactions.</h3>
            <h4 className="skills_title_note">Tools i love using:</h4>
            <ul className="skills_list_container">
                {listItems}
            </ul>
        </div>
    );
}

export default Tools;