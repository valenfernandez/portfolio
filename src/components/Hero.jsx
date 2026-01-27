import profilePic from "../assets/profile.png";

function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
                <div className="img-container">
                    <img src={profilePic} alt="Profile" className="profile-img" ></img>
                </div>
                <p class="spaced"> Hello world, I'm</p>
                <h1>Valentina Fernandez</h1>
                <p>Software Engineer and Technical Architect at Accenture, with experience as an AI Researcher at InfoLab. I build scalable systems and data-driven solutions with real-world impact.</p>
            </div>
           
        </section>
    )
}
export default Hero;