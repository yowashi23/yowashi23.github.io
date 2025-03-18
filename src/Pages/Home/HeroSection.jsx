// how a component is created: 
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    {/* <p className="section--title">Hey, I'm Yong</p> */}
                    <h1 className="hero--section--title">
                        {/* <span className="hero--section--title"> */}
                        <span className="hero--section-title--color">
                            Yongy
                            Shin
                        </span>{" "}
                        <br />
                        {/* Shin */}
                    </h1>
                    <p className="hero--section-description">
                        For work, I appreciate solving problems with data.
                        {/* , critical thinking, and logic */}
                        <br />
                        <br />
                        Beyond work, I enjoy sports and playing music.
                        <br />
                        <br />
                        I'm a Rice alum from Auckland, New Zealand.
                        {/* based in Cambridge, MA */}
                    </p>
                </div>
{/*                 <br />
                <button className="btn btn-primary" onClick={() => window.open("./Yong_Shin_Resume_A.pdf")}>Resume</button> */}
            </div>
            <div className="hero--section--img">
                <img src="./img/headshot-cropped.jpg" alt="Hero Section" />
            </div>
        </section>
    )
}
