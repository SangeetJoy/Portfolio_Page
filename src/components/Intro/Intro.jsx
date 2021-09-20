import "./Intro.css"
function Intro() {
    return (
        <>
            <section className="intro">
                <h1 className="introText">In<span>t</span>ro</h1>
                <p className="introSubTitleText">
                    <span className="openingQuotes">"</span>I am both a creative person and a tech enthusiast who loves being part of this exciting new world where the right technology can change lives and i constantly want to be a part of it. By profession i am a UI developer with 3.9 years of experience delivering quality services to clients like walmart and macys and helping customers to have a rich web experience.<span className="closingQuotes">"</span>
                </p>
            </section>
            <div className="introBreak"></div>
        </>
    );
}

export default Intro;