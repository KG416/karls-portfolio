import '../App.css';
/* import { Button } from './Button'; */
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            {/* <img className="karl-sv" src="/images-public/karlSvartvit.jpg" alt="" /> */}
            <h1>Front end-utvecklare</h1>
            <h2>och kreatör.</h2>
            <img src="/images-public/bass-filter.JPG" alt="Karl" className="karl-face" />



            {/*   <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Ansök om Belgiskt medborgarskap
        </Button>

            </div> */}

        </div>
    );
}

export default HeroSection;