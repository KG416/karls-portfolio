import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Front end-utvecklare</h1>
            <p>och kreatör.</p>

            <img src="src/images/bass-filter.JPG" alt="" />


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