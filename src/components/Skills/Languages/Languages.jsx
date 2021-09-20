import "../Skills.css"
import language from "../../../assets/language.png"
import jsIcon from "../../../assets/js.png"
import htmlIcon from "../../../assets/html.png"
import cssIcon from "../../../assets/css.png"
const languagesData = [
    {
        skillName: "Javascript",
        skillImage: jsIcon
    },
    {
        skillName: "Html",
        skillImage: htmlIcon
    },
    {
        skillName: "Css",
        skillImage: cssIcon
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
function Languages() {
    return (
        <div className="languages_container">
            <img alt="img" src={language} className="skills_image"></img>
            <h2 className="skills_heading">Languages</h2>
            <h3 className="skills_subheading">I value simple content structure, clean design patterns, and thoughtful interactions.</h3>
            <h4 className="skills_title_note">Languages i speak:</h4>
            <ul className="skills_list_container">
                {listItems}
            </ul>
        </div>
    );
}

export default Languages;