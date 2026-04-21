import { useState, useCallback, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Smart Ward Early Warning System (EWS)",
    category: "Real-time Monitoring & Healthcare",
    description: "A real-time monitoring system designed for hospital wards to track patient vitals and detect critical conditions early. It helps healthcare staff respond quickly by generating alerts when abnormal patterns are detected.",
    software: "Python, ML (Scikit-learn), Pandas, NumPy, Firebase",
    hardware: "Sensors (SpO2, Heart rate, Temp), Arduino / Raspberry Pi",
    images: ["/images/ews-1.png", "/images/ews-2.png"],
    link: "https://webtech-project-ae73.vercel.app",
  },
  {
    title: "Emergency Services System",
    category: "Integrated Response Platform",
    description: "An integrated emergency response platform connecting users with nearby fire, police, and medical services. Enables quick alert generation, location tracking, and faster dispatch of emergency units.",
    software: "Python (Flask), Node.js, Google Maps API, Firebase, Gmail API",
    hardware: "GPS Module (for live location tracking)",
    images: ["/images/emergency.png"],
  },
  {
    title: "Smart Robo Car",
    category: "Control Systems & Robotics",
    description: "A robotic car controlled via Bluetooth or hand gestures using sensors. Demonstrates real-time control systems and wireless communication.",
    software: "Arduino IDE (Embedded C/C++), Bluetooth libraries",
    hardware: "Arduino Uno, HC-05 Bluetooth Module, Accelerometer, L298N Motor Driver, DC Motors",
    images: ["/images/car.png"],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div
            className="carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{
                transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <div className="tools-group">
                            <span className="tools-label">Software Tech</span>
                            <p>{project.software}</p>
                          </div>
                          <div className="tools-group">
                            <span className="tools-label">Hardware Tech</span>
                            <p>{project.hardware}</p>
                          </div>
                        </div>
                        {project.link && (
                          <div className="project-link-wrapper">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-website-btn">
                              Visit Website
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    {project.images && project.images.length > 0 && (
                      <div className="carousel-image-wrapper">
                        <div className="project-images-grid">
                          {project.images.map((img, i) => (
                            <WorkImage key={i} image={img} alt={project.title} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
