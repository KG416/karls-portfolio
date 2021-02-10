import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            {/* <img className="karl-sv" src="/images-public/karlSvartvit.jpg" alt="" /> */}
            <h1>Portfolio</h1>
            <h2>Karl Gunnarsson</h2>
            <img src="/images-public/bass-filter.JPG" alt="Karl" className="karl-face" />
            {/* <p className='hero-pres'>Jag är en webb-utvecklare som brinner för UX, design och musik.
            </p>
            <p className='hero-pres2'>Just nu studerar jag Front End Developer på kyh i Stockholm.</p> */}

            <div className='arrow-down-wrap'>
                <a href="#cards-id" className='arrow-down'>
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    );
}

export default HeroSection;