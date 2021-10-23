import profileDp from "../../assets/portfolioDp.jpeg"
import "./Profile.css"
function Profile() {
    return (
        <>
            <section className="heading">
                <h1 className="headingText">Hi, I am Sangeet Joy.</h1>
                <p className="subTitleText">FontEnd Developer | MERN Stack | Passionate UI lover | Tech Enthusiast</p>
                <img className="profileImage" src={profileDp} alt="Dp" />
            </section>
            <div className="profileBreak"></div>
        </>
    );
}

export default Profile;