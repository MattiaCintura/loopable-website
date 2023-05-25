import singleMockup from "../../assets/hero-single-mockup.png";
import doubleMockup from "../../assets/hero-double-mockup.png";
import './Hero.css';

function Hero() {
    return (
        <div className="Hero w-100">
            <div className="Hero-container row mx-0 d-flex align-items-center">
                <div className="col-12 col-sm-6 px-0">
                    <h1 className="mb-5">
                        Renting items made easy
                    </h1>
                    <p className="mb-5">
                        Experience the freedom of flexible renting and earning through unused items
                    </p>
                    <a className="Secondary-button py-3 px-5" href="/">
                        Learn more
                    </a>
                </div>

                <div className="col-12 col-sm-6 px-0">
                    <img src={singleMockup}
                        alt="An iPhone showing the homepage of the Loopable app"
                        className="d-none d-md-block"/>
                    <img src={doubleMockup}
                        alt="Two iPhones showing the homepage and the search results of the Loopable app"
                        className="d-block d-md-none"/>
                </div>
            </div>
        </div>
    );
}

export default Hero;