import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>World-class branding agency that serves some of the world’s biggest brands with branding, product design, websites, etc.<br></br> This portfolio site is an example of my brand personality, and each page immediately gives you the sense of what I'm about: relationships, humor, creativity, and top-class design.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="full meter bar" />
                                <h5>Imagination!</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="full meter bar" />
                                <h5>Statements!</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="full meter bar" />
                                <h5>Architecture!</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="full meter bar" />
                                <h5>Building!</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="colorful background" />
    </section>
  )
}